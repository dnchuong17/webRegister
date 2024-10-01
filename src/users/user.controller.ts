import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from './user.service';
import { AccountEntity } from '../entities/account.entity';
import { UserDTO } from '../dto/user.dto';
@Controller('api')
export class UserController {
  constructor(
    @Inject('User_Service_Chuong') private readonly userService: UserService,
  ) {}

  @Get()
  getAllUser() {
    return this.userService.getAllUsers();
  }

  @Get('/:id')
  getUserDetail(@Param('id') id: number): Promise<AccountEntity> {
    return this.userService.getUserDetail(id);
  }

  @Post('register')
  userRegister(@Body() userDto: UserDTO): Promise<string> {
    return this.userService.userRegister(userDto);
  }

  @Put('/:id')
  updateUser(
    @Body() userDto: UserDTO,
    @Param('id') id: number,
  ): Promise<string> {
    return this.userService.updateUser(userDto, id);
  }

  @Delete('/:id')
  deleted(@Param('id') id: number): Promise<string> {
    return this.userService.deleteAccount(id);
  }

  @Patch('/:id')
  restoreAccount(@Param('id') id: number): Promise<string> {
    return this.userService.restoreAccount(id);
  }
}
