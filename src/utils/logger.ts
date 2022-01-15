import pino from 'pino';
import pretty from 'pino-pretty';
import config from '~/config';

const logger = config.development ? pino(pretty(
  {
    translateTime: 'SYS:standard',
  }
)) : pino();

export default logger;