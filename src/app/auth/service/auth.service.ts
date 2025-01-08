import { Injectable } from '@nestjs/common';
import {
    SigninDto,
    UsernameDto,
    SignupDto,
    EmailDto,
} from '../dto/validationAuth.dto';

@Injectable()
export class AuthService {
    signup(payload: SignupDto) {
        return 'This action adds a new auth';
    }

    signin(payload: SigninDto) {
        return 'This action adds a new auth';
    }

    signOut(payload: UsernameDto) {
        return 'This action adds a new auth';
    }

    forgotPassword(payload: EmailDto) {
        return 'This action adds a new auth';
    }
}
