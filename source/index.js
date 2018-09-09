import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import config from './config/corsConfig';
import router from './routes/';
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

app.use("/api", router);

app.use(function (req, res, next) {
  res.status(404).send({
    message: "No HTTP resource was found that matches the request URI",
    endpoint: req.url,
    method: req.method
  });
});

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).json(err);
});

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    app.listen(port, () => console.info(`sever running on port ${port}`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
