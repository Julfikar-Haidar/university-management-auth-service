import mongoose from 'mongoose';
import app from './app';
// import subscribeToEvents from './app/events';
import config from './config/index';

async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log(`🛢   Database is connected successfully`);

    app.listen(config.port, () => {
      // logger.info(`Application  listening on port ${config.port}`);
      console.log(`Application  listening on port ${config.port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootstrap();
