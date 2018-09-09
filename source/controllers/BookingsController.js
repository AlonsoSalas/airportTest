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
          user_id: user.id
        }
      })
      res.status(200).json(bookings);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }
  }

  cancelBooking(req, res, next) {
    //reglas regular user
    // 1. now + 24hrs < flight.departure_date

    // solo el usuario admin puede cancelar
    // Si una reserva es cancelada, el asiento debe quedar nuevamente disponible para reservaciones.
    res.status(200).json('cancelBooking');
  }

  async createBooking(req, res, next) {
    const user = req.user[0].dataValues;
    const bookingData = req.body;

    if (!bookingData.flight_id) return res.status(400).send({ message: 'Bad Request' });

    const allowedBookingTime = isAdmin(user)
      ? moment().utc().add(1, 'minutes').format('YYYY/MM/DD HH:mm:ss')
      : moment().utc().add(1, 'hours').format('YYYY/MM/DD HH:mm:ss')

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
        date: new Date(),
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
