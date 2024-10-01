import {NestFactory} from '@nestjs/core';
import { AppModule } from './app.module';
import {ValidationPipe} from "@nestjs/common";
import {NestExpressApplication} from "@nestjs/platform-express";
import * as cors from 'cors';
import * as process from "process";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cors());
  await app.listen(process.env.PORT_SERVER);
}
bootstrap();
