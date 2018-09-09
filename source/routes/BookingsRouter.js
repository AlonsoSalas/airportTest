import { Router } from 'express';
import BookingController from '../controllers/BookingsController';

const router = Router();

/* The Base Path for this router is /image you can see it on index.js */

router
  .get('/', BookingController.getBookings)
  .post('/create', BookingController.createBooking)
  .post('/getTicket', BookingController.getTicket)
  .post('/cancel', BookingController.cancelBooking)

export default router;