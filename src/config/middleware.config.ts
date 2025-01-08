import { registerAs } from '@nestjs/config';

export default registerAs(
    'cros',
    (): Record<string, any> => ({
        cors: {
            allowMethods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowHeaders: [
                'Accept',
                'Accept-Language',
                'Content-Language',
                'Content-Type',
                'Origin',
                'Authorization',
                'Access-Control-Request-Method',
                'Access-Control-Request-Headers',
                'Access-Control-Allow-Headers',
                'Access-Control-Allow-Origin',
                'Access-Control-Allow-Methods',
                'Access-Control-Allow-Credentials',
                'Access-Control-Expose-Headers',
                'Access-Control-Max-Age',
                'Referer',
                'Host',
                'X-Requested-With',
                'x-custom-lang',
            ],
            allowOrigin: (
                process.env.CORS_ORIGIN || 'http://localhost:3000'
            ).split(','),
        },
        rateLimit: {
            resetTime: 1 * 60 * 1000,
            maxRequestPerId: 10,
        },
    }),
);
