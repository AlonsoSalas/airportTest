import HttpService from '../services/httpService';
import queryString from 'query-string';
import ErrorHandler from '../handler/ErrorHandler';

class OAuthController {

  async login(req, res, next) {
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
    try {
      const response = await httpsService.post(`v1/token`, stringified, opts);
      res.status(200).json(response.body);
    } catch (error) {
      ErrorHandler(error, res, req, next);
    }
  }
}

const oAuthController = new OAuthController();

export default oAuthController;
