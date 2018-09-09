import models from '../models';
import ErrorHandler from '../handler/ErrorHandler';
const Bookings = models.Bookings;

class BookingsController {

  async getBookings(req, res, next) {
    const user = req.user[0].dataValues;
    try {
      const bookings = await Bookings.findAll({
        where: {
          user_id : user.id
        }
      })
      res.status(200).json(bookings);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }
  }

  getBookingsByDate(req, res, next) {
    res.status(200).json('getBookingsByDate');
  }

  getBookingById(req, res, next) {
    res.status(200).json('getBookingById');
  }

  getBookingByUser(req, res, next) {
    res.status(200).json('getBookingByUser');
  }

  cancelBooking(req, res, next) {
    //reglas regular user
    // 1. now + 24hrs < flight.departure_date

    // solo el usuario admin puede cancelar
    // Si una reserva es cancelada, el asiento debe quedar nuevamente disponible para reservaciones.
    res.status(200).json('cancelBooking');
  }

  createBooking(req, res, next) {

    

    // regular users
    // if now+1hr < flight.departure_date

    // admin users
    // if now+1min < flight.departure_date


    // console.log(req.body);
    res.status(200).json(req.body);
  }
}

const isAdmin = (user) => {
  
};

const bookingsController = new BookingsController();

export default bookingsController;
