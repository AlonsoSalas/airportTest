import { ExpressOIDC } from '@okta/oidc-middleware';
import dotenv from 'dotenv';

dotenv.config();

let { SESSION_SECRET, OKTA_URL, OKTA_CLIENT_ID, OKTA_CLIENT_SECRET, PORT } = process.env;

// session support is required to use ExpressOIDC
const sessionConfig = {
  secret: SESSION_SECRET,
  resave: true,
  saveUninitialized: false
};

const oidc = new ExpressOIDC({
  issuer: OKTA_URL,
  client_id: OKTA_CLIENT_ID,
  client_secret: OKTA_CLIENT_SECRET,
  redirect_uri: `http://localhost:${PORT}/authorization-code/callback`,
  scope: 'openid profile'
});

export default {
    sessionConfig, oidc
};
