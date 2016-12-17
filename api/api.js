import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import winston from 'winston';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import moment from 'moment';
import PrettyError from 'pretty-error';

import * as firebase from 'firebase';
const firebaseConfig = require('./config');

const firebaseApp = firebase.initializeApp(firebaseConfig, 'firebase-web');

if (firebaseApp.options.apiKey === firebaseConfig.apiKey) {
  global.database = firebase.database(firebaseApp);
  console.log('==> 🛢 Firebase is connected on %s 😉', firebaseApp.l);
}


const pretty = new PrettyError();

const config = {
  apiPort: 3030,
  apiHost: 'localhost'
};

/* Logger configuration */
const logger = new winston.Logger({
  transports: [
    new winston.transports.File({
      name: 'error_logs',
      level: 'error',
      filename: `logs/${moment().format('YYYYMMDD')}_error.log`,
      // silent: true,
      maxsize: 5242880, // 5MB
      showLevel: false,
      json: true
    }),
    new winston.transports.File({
      name: 'info_logs',
      level: 'info',
      filename: `logs/${moment().format('YYYYMMDD')}_all.log`,
      // silent: true,
      maxsize: 5242880, // 5MB
      showLevel: false,
      json: true
    })
  ]
});

logger.stream = {
  write: msg => {
    logger.info(msg);
  }
};

const app = express();

app.set('secret', 'whoareyou in passport');
global.secret = app.get('secret');

app.use(session({
  secret: app.get('secret'),
  resave: true,
  cookie: { maxAge: 60000 * 60 * 24, expires: new Date(9999999999999) },
  saveUninitialized: true
}));

app.use(morgan('combined', { stream: logger.stream }));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(passport.initialize());
app.use(passport.session());

app.use('/', (req, res, next) => {
  console.log(req.originalUrl);
  next();
}, require('./routes/index'));

/* ERROR HANDLER */
app.use((error, req, res, next) => {
  if (error.code >= 500) console.error(pretty.render(error));
  else console.error(pretty.render(error.message));
  logger.error(error);
  res.status(error.code || 500).json({
    code: error.code || 500,
    message: error.message
  });
  next();
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.apiPort);
app.set('port', port);
app.set('host', config.apiHost);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Listen on provided port, on all network interfaces.
 */
const server = app.listen(app.get('port'), err => {
  if (err) {
    console.error(err);
  }
  console.info('==> 🌎  API is running on port %s 😀', app.get('port'));
  console.info('==> 💻  Send requests to http://%s:%s 😅', app.get('host'), app.get('port'));
});
/**
 * Event listener for HTTP server "listening" event.
 */

server.on('error', onError);
