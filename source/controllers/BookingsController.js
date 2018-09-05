class BookingsController {

  getBookings(req, res, next) {
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
    res.status(200).json('cancelBooking');
  }

  createBookingByFlight(req, res, next) {
    res.status(200).json('createBooking');
  }
}

const bookingsController = new BookingsController();

export default bookingsController;
