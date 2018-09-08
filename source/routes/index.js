import {Router} from 'express';
import {oidc} from '../config/oAuth';
import FlightsController from '../controllers/FlightsController';
import BookingController from '../controllers/BookingsController';
import HttpService from '../services/httpService';
import queryString from 'query-string';
import { authenticationRequired } from '../middleware/oAuth';

const router = Router();

router
    //Flights Routes
    .get('/flights', authenticationRequired, FlightsController.getFlights)
    .post('/login', async (req, res) => {
        console.log('process.env.OKTA_URL', process.env.OKTA_URL);
        console.log('!!!!')
        const payload = {
            'grant_type': 'password',
            username: req.body.username,
            password: req.body.password,
            scope: 'openid'
        }
        
        const stringified = queryString.stringify(payload);
    
        const httpsService = HttpService.create(process.env.OKTA_URL);
        const opts = {
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'accept': 'application/json',
                'authorization': `Basic ${process.env.OKTA_AUTHORIZATION_BASIC_TOKEN}`,
            }
        };
        console.log('stringified', stringified);
        try {
            const response = await httpsService.post(`v1/token`, stringified, opts);    
            res.status(200).json(response.body);
        } catch (error) {
            res.status(500).send(error);
        }
    })

    //bookings Routes
    .get('/bookings', BookingController.getBookings)
    .post('/bookings/create', BookingController.createBooking)
    .get('/bookings', BookingController.getBookingsByDate)
    .get('/bookings/id', BookingController.getBookingById)
    .get('/bookings/user', BookingController.getBookingByUser)
    .post('/bookings/cancel', BookingController.cancelBooking)

export default router;
