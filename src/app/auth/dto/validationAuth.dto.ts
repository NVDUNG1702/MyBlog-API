import {
    IsEmail,
    IsEnum,
    IsNotEmpty,
    IsOptional,
    IsPhoneNumber,
    IsString,
    MinLength,
} from 'class-validator';
import { USER_GENDER } from 'src/app/user/constant/user.constant';
import { AUTH_ROLE } from '../constant/auth.contants';

export class SignupDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    username: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    lastName: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsPhoneNumber('VN')
    phone: string;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsEnum(USER_GENDER)
    gender: USER_GENDER;

    @IsNotEmpty()
    @IsString()
    @IsOptional()
    @IsEnum(AUTH_ROLE)
    role: AUTH_ROLE;
}


export class SigninDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}

export class UsernameDto {
    @IsNotEmpty()
    @IsString()
    username: string;
}

export class EmailDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;
}

