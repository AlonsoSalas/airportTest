import {Router} from 'express';
import FlightsController from '../controllers/FlightsController';
import BookingController from '../controllers/BookingsController';

const router = Router();

router
    .get('/flights', FlightsController.getFlights)
    .get('/bookings', BookingController.getBookings)

export default router;
