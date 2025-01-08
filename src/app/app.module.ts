import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ThrottlerModule } from '@nestjs/throttler';
import { RouterCommonModule } from 'src/router/router.common.module';

@Module({
    controllers: [],
    imports: [
        ThrottlerModule.forRoot([
            {
                ttl: 30000,
                limit: 20,
            },
        ]),

        // 

        // Router
        RouterCommonModule,
        RouterModule.register([
            {
                path: '/',
                module: RouterCommonModule,
            },
        ]),
    ],
})
export class AppModule {}
