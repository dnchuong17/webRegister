import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class UserDTO {
  @IsNotEmpty({ message: 'Account should not be empty' })
  userAccount: string;
  @IsNotEmpty({ message: 'Password should not be empty' })
  @MinLength(6, {
    message: 'Password should be longer than or equal to 6 characters',
  })
  userPassword: string;
  @IsNotEmpty({ message: 'Name should not be empty' })
  userName: string;

  userEmail?: string;

  userPhone?: string;
}
