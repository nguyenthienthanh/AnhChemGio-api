import express from 'express';
import morgan from 'morgan';
import http from 'http';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import debuger from 'debug';
import winston from 'winston';
import moment from 'moment';
import pretty from 'pretty-error';
import * as firebase from 'firebase';

const app = express();
const config = {
  apiPort: 3030,
  apiHost: 'localhost'
};
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());

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

app.use('/', (req, res, next) => {
  console.log(req.originalUrl);
  next();
}, require('./routes/index'));
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

const debug = debuger('AnhChemGio-api:server');

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(process.env.PORT || config.apiPort);
app.set('port', port);


/**
 * Create HTTP server.
 */

const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, err => {
  if (err) {
      console.error(err);
    }
    console.info('----\n==> 🌎  API is running on port %s', config.apiPort);
    console.info('==> 💻  Send requests to http://%s:%s', config.apiHost, config.apiPort);
});
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

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
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
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
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

const firebaseConfig = require('./config');

firebase.initializeApp(firebaseConfig);