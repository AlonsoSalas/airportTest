import { Router } from 'express';
import OAuthController from '../controllers/OAuthController';

const router = Router();

/* The Base Path for this router is /image you can see it on index.js */

router
  .post('/token', OAuthController.login)

export default router;
