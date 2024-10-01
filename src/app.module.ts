import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {dataSourceOptions} from "./config/data-source";
import { AuthModule } from './auth/auth.module';
import * as process from "process";
import * as dotenv from 'dotenv';

dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot(
        {
          type: 'postgres',
          host: process.env.DATABASE_HOST,
          port: Number(process.env.DATABASE_PORT),
          username: process.env.DATABASE_USERNAME,
          password: process.env.DATABASE_PASSWORD,
          database: process.env.DATABASE_DATABASE,
          entities: ['dist/**/*.entity{.ts,.js}'],
          synchronize: true,
        }
    ), UserModule, AuthModule,]})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
