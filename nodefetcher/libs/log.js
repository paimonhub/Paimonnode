import winston from 'winston';

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
}

const level = () => {
    const env = process.env.NODE_ENV || 'development'
    const isDevelopment = env === 'development'
    return isDevelopment ? 'debug' : 'warn'
}

const colors = {
    error: 'red',
    warn: 'yellow',
    info: 'green',
    debug: 'white',
}

winston.addColors(colors)

const format = winston.format.combine(
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
    winston.format.colorize({ all: true }),
    winston.format.printf(
        (info) => `[${info.timestamp}][${info.level}]${info.message}`,
    ),
)

const transports = [
    new winston.transports.Console(),
    new winston.transports.File({
        filename: `logs/error-${global.dateStr}.log`,
        level: 'error',
    }),
    new winston.transports.File({ filename: `logs/all-${global.dateStr}.log` }),
]

const Logger = winston.createLogger({
    level: level(),
    levels,
    format,
    transports,
})

global.Logger=Logger