import { registerAs } from '@nestjs/config';

export default registerAs(
    'app',
    (): Record<string, any> => ({
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        env: process.env.NODE_ENV || 'development',
        timeZone: process.env.TIME_ZONE || 'Asia/Tokyo',
        debugger: {
            http: {
                maxFile: 5,
                maxSize: '2M',
            },
            system: {
                active: false,
                maxFiles: '7d',
                maxSize: '2m',
            },
        },
        debug: process.env.DEBUG === 'true' || false,
    }),
);
