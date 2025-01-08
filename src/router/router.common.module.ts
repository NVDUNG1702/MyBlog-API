import { Module } from "@nestjs/common";
import { AccessTokenController } from "src/app/access-token/access-token.controller";
import { AccessTokenModule } from "src/app/access-token/access-token.module";
import { AuthModule } from "src/app/auth/auth.module";
import { AuthController } from "src/app/auth/controller/auth.controller";
import { OtpController } from "src/app/otp/otp.controller";
import { OtpModule } from "src/app/otp/otp.module";
import { UsersController } from "src/app/user/controller/users.controller";
import { UsersModule } from "src/app/user/users.module";
import { RefreshTokenController } from "src/refresh-token/refresh-token.controller";
import { RefreshTokenModule } from "src/refresh-token/refresh-token.module";

@Module({
    controllers: [
        UsersController,
        OtpController,
        AccessTokenController,
        RefreshTokenController,
        AuthController
    ],
    imports: [
        UsersModule,
        OtpModule,
        AccessTokenModule,
        RefreshTokenModule,
        AuthModule
    ]
})
export class RouterCommonModule {}