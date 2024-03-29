// npm packages
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import passport from 'passport';
import morgan from 'morgan';
import cors from 'cors';

// our packages
import {logger} from './util';
import {auth as authConfig} from '../config';
import setupAuthRoutes from './auth';
import setupUserRoutes from './user';

// init app
const app = express();

// setup logging
app.use(morgan('combined', {stream: logger.stream}));

// setup cors
app.use(cors());

// add body parsing
app.use(bodyParser.json()); // for parsing application json
app.use(bodyParser.urlencoded({extended: true})); // for parsing application/x-www-form-urlencoded

// add cookie parsing
app.use(cookieParser());

// add session support
app.use(session({
  secret: authConfig.sessionSecret,
  resave: false,
  saveUninitialized: true,
  cookie: {secure: true},
}));

// add passport.js
app.use(passport.initialize());
app.use(passport.session());

// test method
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// setup authentication routes
setupAuthRoutes(app);

// setup users routes
setupUserRoutes(app);

// catch all unhandled errors
app.use((err, req, res, next) => { // eslint-disable-line
  logger.error(err.stack);
  res.status(500).send(err);
});

// export app
export default app;
