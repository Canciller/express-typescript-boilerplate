import express from 'express';
import pinoHttp from 'pino-http';
import {
  logger as baseLogger,
} from '~/utils';

// https://www.npmjs.com/package/pino-http

const logger = pinoHttp({
  logger: baseLogger,
});

export default function loggerLoader(app: express.Application) {
  app.use(logger);
}