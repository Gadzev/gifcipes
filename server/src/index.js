// our packages
import app from './app';
import {logger} from './util';
import {thinky} from './db';

// wait for DB to initialize
thinky.dbReady().then(() => {
  logger.info('Database ready, starting server...');

  // start server
  app.listen(8080, function() {
    const host = this.address().address;
    const port = this.address().port;
    logger.info(`Gifcipes server listening at http://${host}:${port}`);
  });
});

// output all uncaught exceptions
process.on('uncaughtException', err => logger.error('uncaught exception', err));
process.on('unhandledRejection', err => logger.error('unhandled rejection', err));
