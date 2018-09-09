import models from '../models';
import ErrorHandler from '../handler/ErrorHandler';
import moment from 'moment';
const Flights = models.Flights;

class FlightsController {

  async getFlights(req, res, next) {
    try {
      const flights = await Flights.findAll({
        where: {
          departure_date: {
            $gt: moment().utc().add(1, 'hours')
          }
        }
      })
      res.status(200).json(flights);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }

  }

  async getFlightsIveBooked(req, res, next) {
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
}

const flightsController = new FlightsController();

export default flightsController;
