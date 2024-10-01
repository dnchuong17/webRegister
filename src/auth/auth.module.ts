import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AccountEntity} from "../entities/account.entity";

@Module({
  imports: [
      TypeOrmModule.forFeature([AccountEntity]),
  ],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}
