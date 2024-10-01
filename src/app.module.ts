import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import {dataSourceOptions} from "../db/data-source";
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions), UserModule, AuthModule,]})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
