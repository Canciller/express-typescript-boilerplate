import express from 'express';
import config from './config';
import { logger } from './utils';

async function startServer() {
  const app = express();

  await require('./loaders').default(app);

  app.listen(config.port, () => {
    logger.info(`Environment: ${config.env}`);
    logger.info(`Server listening on port ${config.port}`);
  }).on('error', err => {
    logger.error(err);
    process.exit(1);
  });
}

startServer();