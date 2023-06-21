import { NestFactory } from '@nestjs/core';
import { SupplyModule } from './supply.module';
import { Logger } from '@nestjs/common';
import { CustomValidationPipe } from './validator/global-validator';

async function bootstrap() {
  const app = await NestFactory.create(SupplyModule);

  app.enableCors();
  app.useGlobalPipes(new CustomValidationPipe());
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  await app.listen(process.env.APP_PORT);
  Logger.log(
    `🚀 ARTICLES is running on: http://localhost:${process.env.APP_PORT}/${globalPrefix}`,
  );
}
bootstrap();
console.log(process.env.APP_PORT);
