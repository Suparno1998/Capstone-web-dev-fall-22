const winston = require('winston')
require('winston-daily-rotate-file')

const customLogger = winston.format.printf( ({ label, level, message, timestamp , ...metadata}) => {
    let msg = `${timestamp} ${level} [${label}]: ${message} `  
    return msg
});

const getLogger = (fileName)=>{
    const logger = winston.createLogger({
      level: 'info',
      format : winston.format.combine(
          winston.format.label({label : fileName}),
          winston.format.splat(),
          winston.format.timestamp({format: 'YYYY-MM-DD HH:mm:ss'}),
          customLogger
        ),
      transports: [
          new winston.transports.DailyRotateFile({
            label : fileName,
            level: 'info',
            filename: './logs/application-info-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
          }),
          new winston.transports.DailyRotateFile({
            label : fileName,
            level: 'error',
            filename: './logs/application-error-%DATE%.log',
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d'
          })
      ]
  });
  logger.add(new winston.transports.Console());

  return logger
}


module.exports = getLogger

