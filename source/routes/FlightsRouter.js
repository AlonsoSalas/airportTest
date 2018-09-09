import { Router } from 'express';
import FlightsController from '../controllers/FlightsController';

const router = Router();

/* The Base Path for this router is /image you can see it on index.js */

router
  .get('/', FlightsController.getFlights)

export default router;
