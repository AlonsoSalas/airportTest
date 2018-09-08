import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import session from 'express-session';
// import config from './config/config';
import config from './config/corsConfig';
import router from './routes/';
import oAuthConfig from './config/oAuth';
import db from './models';

const app = express();
const port = process.env.PORT || 8000;

/*Loading envioroment vars from .env file,  this file is not available in the repository,
so if you need to test this app in localhost you must create your own*/
dotenv.config({
    silent: true
});

//Setting up the Express App

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(config.CorssConfig);

// ExpressOIDC will attach handlers for the /login and /authorization-code/callback routes
// app.use(session(oAuthConfig.sessionConfig));
// app.use(oAuthConfig.oidc.router);
// app.get('/', (req, res) => {
//   if (req.userinfo) {
//     res.send(`Hello ${req.userinfo.name}! <a href="logout">Logout</a>`);
//   } else {
//     res.send('Please <a href="/login">login</a>');
//   }
// });
// app.get('/protected', oAuthConfig.oidc.ensureAuthenticated(), (req, res) => {
//   res.send('Top Secret');
// });
// app.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });
// oAuthConfig.oidc.on('ready', () => {
//   app.listen(port, () => console.log('app started'));
// });
// oAuthConfig.oidc.on('error', err => {
//   // An error occurred while setting up OIDC
// });

app.use("/api", router);

app.use(function(req, res, next) {
    res.status(404).send({
        message: "No HTTP resource was found that matches the request URI",
        endpoint: req.url,
        method: req.method
    });
});

app.use(function(err, req, res, next) {
    console.log(err);
    res.status(500).json(err);
});

db.sequelize
    .authenticate()
    .then(() => {

        // oidc.on('ready', () => {
            console.log('Connection has been established successfully.');
            app.listen(port, () => console.info(`sever running on port ${port}`));
        // });
        
        // oidc.on('error', err => {
        //     console.log('Unable to configure ExpressOIDC', err);
        // });
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
