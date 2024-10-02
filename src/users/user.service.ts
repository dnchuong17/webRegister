import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../entities/account.entity';
import { DataSource, Repository } from 'typeorm';
import { UserDTO } from '../dto/user.dto';
import { dataSourceOptions } from '../config/data-source';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly userRepository: Repository<AccountEntity>,
    private readonly dataSource: DataSource,
  ) {}

  async getAllUsers() {
    try {
      const users = await this.userRepository
        .createQueryBuilder('c')
        .where('deleted = false')
        .getMany();
      return users;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async getUserDetail(id: number): Promise<AccountEntity> {
    try {
      const user = await this.userRepository
        .createQueryBuilder('c')
        .where('c.id = :id', { id })
        .getOne();
      return user;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async userRegister(userDto: UserDTO): Promise<string> {
    try {
      const userRegister: AccountEntity = new AccountEntity();
      userRegister.userAccount = userDto.userAccount;
      userRegister.userPassword = userDto.userPassword;
      userRegister.userName = userDto.userName;
      userRegister.userEmail = userDto.userEmail;
      userRegister.userPhone = userDto.userPhone;
      await this.userRepository
        .createQueryBuilder()
        .insert()
        .into(AccountEntity)
        .values(userRegister)
        .execute();
      return 'Register successful';
    } catch (error) {
      throw new BadRequestException(error);
    }
  }

  async updateUser(userDto: UserDTO, id: number): Promise<string> {
    try {
      await this.userRepository
        .createQueryBuilder('c')
        .update(AccountEntity)
        .set({
          userName: userDto.userName,
          userAccount: userDto.userName,
          userPassword: userDto.userPassword,
          userEmail: userDto.userEmail,
          userPhone: userDto.userPhone,
        })
        .where('id = :id', { id })
        .execute();
      return 'update successful';
    } catch (error) {
      throw new BadRequestException(error, 'cant update');
    }
  }

  async deleteAccount(id: number): Promise<string> {
    try {
      await this.userRepository
        .createQueryBuilder()
        .update(AccountEntity)
        .set({
          deleted: true,
        })
        .where('id = :id', { id })
        .execute();
      return 'Delete successful';
    } catch (error) {
      throw new BadRequestException('Unable to delete account', error.message);
    }
  }

  async restoreAccount(id: number): Promise<string> {
    try {
      await this.userRepository
        .createQueryBuilder()
        .update()
        .set({
          deleted: false,
        })
        .where('id = :id', { id })
        .execute();
      return 'restore account successful';
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
