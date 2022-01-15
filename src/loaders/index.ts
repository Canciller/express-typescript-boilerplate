import express from 'express';
import {
  logger
} from '~/utils';
import expressLoader from './express';
import loggerLoader from './logger';

export default async function loaders(app: express.Application) {
  loggerLoader(app);
  logger.info('Logger loaded');

  expressLoader(app);
  logger.info('Express loaded');
}