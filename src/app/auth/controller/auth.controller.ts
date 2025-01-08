import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import {
    SignupDto,
    SigninDto,
    UsernameDto,
    EmailDto,
} from '../dto/validationAuth.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signup(@Body() payload: SignupDto) {
        return this.authService.signup(payload);
    }

    @Post('signin')
    findAll(@Body() payload: SigninDto) {
        return this.authService.signin(payload);
    }

    @Post('signOut')
    signout(@Body() payload: UsernameDto) {
        return this.authService.signOut(payload);
    }

    @Post('forgot-password')
    forgotPassword(@Body() payload: EmailDto) {
        return this.authService.forgotPassword(payload);
    }

    @Post('login-width-token')
    loginWidthToken(@Body() payload: any) {
        // return this.authService.loginWidthToken(payload);
    }

    @Post('refresh-token')
    refreshToken(@Body() payload: any) {
        // return this.authService.refreshToken(payload);
    }
}
