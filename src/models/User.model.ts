import { IsEmail, MinLength } from 'class-validator';

export class UserModel {

    @IsEmail()
    email: string;

    @MinLength(6)
    password: string;

}