
const winston = require('winston');

const logTransports = [
  new (winston.transports.Console)({
    timestamp: () => new Date().toISOString(),
    formatter: (options) => (
      `${options.timestamp()}  ${options.level.toUpperCase()}: ${options.message ? options.message : ''} ${(options.meta && Object.keys(options.meta).length ? `\n\t${JSON.stringify(options.meta)}` : '')}` // eslint-disable-line
    ),
  }),
];

const LOGLEVEL = (process.env.LOGLEVEL || 'debug').toLowerCase();
const logger = winston.createLogger({
  transports: logTransports,
  level: LOGLEVEL,
});

module.exports = logger;
