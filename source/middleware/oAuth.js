import OktaJwtVerifier from '@okta/jwt-verifier';
const dotenv = require('dotenv');
import models from '../models';
const Users = models.Users;

dotenv.config();

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: process.env.OKTA_URL,
  assertClaims: {
    aud: "api://default",
    cid: process.env.OKTA_CLIENT_ID
  }
});
/**
 * A simple middleware that asserts valid access tokens and sends 401 responses
 * if the token is not present or fails validation.  If the token is valid its
 * contents are attached to req.jwt
 */

const isAuthenticated = async (req, res, next) => {
  console.log(req.headers.authorization);
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    res.status(401);
    return next('Unauthorized');
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then(async (jwt) => {
      req.jwt = jwt;
      req.user = await Users.findAll({
        where: {
          email: jwt.claims.sub
        }, include: [
          'Rol'
        ]
      });
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(401).send(err.message);
    });
}

module.exports = {
  isAuthenticated
}