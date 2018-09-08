class BookingsController {

  getBookings(req, res, next) {
    // do not show flight if now + 24hrs < flight.departure_date 
    // show if i have booked this flight
    res.status(200).json('getAllBookings');
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
    // solo el usuario admin puede cancelar
    // Si una reserva es cancelada, el asiento debe quedar nuevamente disponible para reservaciones.
    res.status(200).json('cancelBooking');
  }

  createBooking(req, res, next) {
    
    //reglas para todos los usuarios
    

    //reglas regular user
    // 1. now + 24hrs < flight.departure_date

    // console.log(req.body);
    res.status(200).json(req.body);
  }
}

const bookingsController = new BookingsController();

export default bookingsController;
