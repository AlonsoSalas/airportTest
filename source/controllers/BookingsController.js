import models from '../models';
import ErrorHandler from '../handler/ErrorHandler';
import moment from 'moment';
const Bookings = models.Bookings;
const Flights = models.Flights;

class BookingsController {

  async getBookings(req, res, next) {
    const user = req.user[0].dataValues;
    try {
      const bookings = await Bookings.findAll({
        where: {
          user_id: user.id,
          active: 1
        }
      })
      res.status(200).json(bookings);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }
  }

  async cancelBooking(req, res, next) {
    const user = req.user[0].dataValues;
    const bookingData = req.body;

    if (!bookingData.booking_id) return res.status(400).send({ message: 'Bad Request' });

    const allowedBookingTime = moment().utc().add(1, 'minutes');

    if (isAdmin(user)) {
      const booking = await Bookings.findOne({
        where: {
          id: bookingData.booking_id,
          retired: false
        },
        include: [{
          model: Flights,
          where: {
            departure_date: {
              $gt: allowedBookingTime
            }
          }
        }]
      })

      if (!booking) return res.status(200).send({ message: 'Booking not found' });

      if (!booking.active) return res.status(200).send({ message: 'Ticket was already canceled' });

      if (booking.Flight.departure_date > allowedBookingTime) {
        try {
          booking.updateAttributes({
            active: false
          }).then((bookingUpdated) => {
            booking.Flight.updateAttributes({
              stock: booking.Flight.stock + 1
            });
            return res.status(202).send(bookingUpdated);
          })
        } catch (error) {
          ErrorHandler(error, res, req, next);
        }
      }
    }
  }

  async getTicket(req, res, next) {
    const user = req.user[0].dataValues;
    const bookingData = req.body;

    if (!bookingData.booking_id) return res.status(400).send({ message: 'Bad Request' });

    const allowedBookingTime = isAdmin(user)
      ? moment().utc().add(1, 'minutes')
      : moment().utc().add(1, 'hours')

    const booking = await Bookings.findOne({
      where: {
        id: bookingData.booking_id
      },
      include: [{
        model: Flights,
        where: {
          departure_date: {
            $gt: allowedBookingTime
          }
        }
      }]
    })

    if (!booking) return res.status(200).send({ message: 'Booking not found' });

    if (booking.retired) return res.status(200).send({ message: 'Ticket was already retired' });

    if (booking.Flight.departure_date > allowedBookingTime) {
      try {
        booking.updateAttributes({
          retired: true
        }).then((bookingUpdated) => res.status(202).send(bookingUpdated))
      } catch (error) {
        ErrorHandler(error, res, req, next);
      }
    }
  }

  async createBooking(req, res, next) {
    const user = req.user[0].dataValues;
    const bookingData = req.body;

    if (!bookingData.flight_id) return res.status(400).send({ message: 'Bad Request' });

    const allowedBookingTime = isAdmin(user)
      ? moment().utc().add(1, 'minutes')
      : moment().utc().add(1, 'hours')

    const flight = await Flights.findAll({
      where: {
        departure_date: {
          $gt: allowedBookingTime
        },
        id: bookingData.flight_id
      }
    })

    if (!flight.length) return res.status(200).send({ message: 'Flight not found' });

    Bookings
      .create({
        user_id: user.id,
        flight_id: bookingData.flight_id,
        date: moment().utc().format('YYYY/MM/DD HH:mm:ss'),
        active: true
      })
      .then(newBooking => {
        Flights.findOne({
          id: newBooking.flight_id
        })
          .then(flight => {
            flight.updateAttributes({
              stock: flight.stock - 1
            })
          });

        res.status(202).send(newBooking);
      })
      .catch(error => {
        ErrorHandler(error, res, req, next);
      })
  }
}

const isAdmin = (user) => {
  return user.Rol.dataValues.name === 'admin';
};

const bookingsController = new BookingsController();

export default bookingsController;
