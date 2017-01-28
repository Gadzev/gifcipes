import winston from 'winston';

export const logger = new winston.Logger({
  transports: [
    new winston.transports.Console({
      level: do {
        // TODO: remove eslint disable lines once the bug is fixed
        if (process.env.NODE_ENV === 'testing') {
          'error'; // eslint-disable-line
        } else if (process.env.NODE_ENV === 'production') {
          info; // eslint-disable-line
        } else {
          'debug'; // eslint-disable-line
        }
      },
      timestamp: true,
      prettyPrint: true,
      label: 'gifcipes-server',
    }),
  ],
});

// create stream for morgan
logger.stream = {
  write: message => logger.info(message),
};
