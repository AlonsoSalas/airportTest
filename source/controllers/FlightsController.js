import models from '../models';
const Flights = models.Flights;

class FlightsController {

  async getFlights(req, res, next) {
    const flights = await Flights.findAll({
      where: {
        departure_date: {
          $gt: new Date()
        }
      }
    })
    res.status(200).json(flights);
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
