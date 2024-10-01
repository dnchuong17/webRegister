import {BadRequestException, Injectable, UnauthorizedException} from '@nestjs/common';
import {Repository} from "typeorm";
import {AccountEntity} from "../entities/account.entity";
import {UserDTO} from "../dto/user.dto";

@Injectable()
export class AuthService {
    constructor(private readonly userRepository: Repository<AccountEntity>) {
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
