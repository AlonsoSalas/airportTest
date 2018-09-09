import { Router } from 'express';
import { isAuthenticated } from '../middleware/oAuth';
import oauthRouter from './OAuthRouter';
import flightRouter from './FlightsRouter';
import bookingRouter from './BookingsRouter';

const router = Router();

router
  .use('/auth', oauthRouter)
  .use('/flight', isAuthenticated, flightRouter)
  .use('/bookings', isAuthenticated, bookingRouter)

export default router;
