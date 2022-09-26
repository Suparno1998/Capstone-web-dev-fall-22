const winston = require('winston')
require('winston-daily-rotate-file')

const customLogger = winston.format.printf( ({ level, message, timestamp , ...metadata}) => {
    let msg = `${timestamp} ${level} : ${message} `  
    if(metadata) {
      msg += JSON.stringify(metadata)
    }
    return msg
});

const transportInfo = new winston.transports.DailyRotateFile({
    level: 'info',
    filename: './logs/application-info-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
});

const transportError = new winston.transports.DailyRotateFile({
    level: 'error',
    filename: './logs/application-error-%DATE%.log',
    datePattern: 'YYYY-MM-DD-HH',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d'
  });

const logger = winston.createLogger({
    level: 'info',
    format : winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp(),
        customLogger
      ),
    transports: [
        transportInfo, // will be used on info level
        transportError  // will be used on error level
    ]
});

module.exports = logger

