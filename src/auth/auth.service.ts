import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {Repository} from "typeorm";
import {AccountEntity} from "../entities/account.entity";
import {UserDTO} from "../dto/user.dto";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AccountEntity)
        private readonly userRepository: Repository<AccountEntity>) {
    }

    async signIn(userDto: UserDTO): Promise<void> {
        try {
            await this.userRepository.createQueryBuilder()
                .getOne()
        } catch (error) {
            throw new UnauthorizedException(error)
        }

    }
}
