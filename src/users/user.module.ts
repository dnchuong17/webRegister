import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountEntity } from '../entities/account.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AccountEntity]), // Register the AccountEntity
  ],
  controllers: [UserController],
    providers: [
        {
            provide: 'User_Service_Chuong',
            useClass: UserService,
        },
    ],
})
export class UserModule {}
