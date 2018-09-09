import models from '../models';
import ErrorHandler from '../handler/ErrorHandler';
const Flights = models.Flights;

class FlightsController {

  async getFlights(req, res, next) {

    // do not show flight if now + 1hr < flight.departure_date 
    try {
      const flights = await Flights.findAll({
        where: {
          departure_date: {
            $gt: new Date().addHours(1)
          }
        }
      })
      res.status(200).json(flights);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }

  }

  async getFlightsIveBooked(req, res, next) {
    // console.log('jwt', jwt.claims.sub);
    try {
      const flights = await Flights.findAll({
        where: {
          departure_date: {
            $gt: new Date().addHours(1)
          }
        }
      })
      res.status(200).json(flights);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }

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

Date.prototype.addHours = function(h){
  this.setHours(this.getHours()+h);
  return this;
}

export default flightsController;
