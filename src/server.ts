import mongoose from 'mongoose';
import app from './app';
// import subscribeToEvents from './app/events';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    logger.info(`🛢   Database is connected successfully`);

    app.listen(config.port, () => {
      // logger.info(`Application  listening on port ${config.port}`);
      logger.info(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    errorLogger.error(err);
  }
}

bootstrap();
