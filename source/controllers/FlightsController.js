class FlightsController {

  getFlights(req, res, next) {
    res.status(200).json('getAllFlights');
  }

  getFlightsByDate(req, res, next) {
    res.status(200).json('getByFlightssDate');
  }

  getFlightsByUser(req, res, next) {
    res.status(200).json('getByFlightssDate');
  }

  getFlightById(req, res, next) {
    res.status(200).json('getFlightById');
  }

  getStockByFlight(req, res, next) {
    res.status(200).json('getStockByFlight');
  }
}

const flightsController = new FlightsController();

export default flightsController;
