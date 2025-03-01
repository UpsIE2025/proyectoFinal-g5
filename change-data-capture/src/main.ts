import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication, Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await startServer(app);
}

const startServer = async (app: INestApplication) => {
  const configService = app.get(ConfigService);
  const port = configService.get<number>('config.PORT') || 8080;
  app.enableCors();

  await app.listen(port);
};

bootstrap()
  .then((next) => {
    return next;
  })
  .catch((err) => {
    Logger.error(err.message);
  });
