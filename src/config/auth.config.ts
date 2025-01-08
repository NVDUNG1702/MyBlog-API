import { registerAs } from '@nestjs/config';

export default registerAs(
    'auth',
    (): Record<string, any> => ({
        jwt: {
            secret: process.env.JWT_SECRET || 'secret',
            expiresIn: process.env.JWT_EXPIRES_IN || '1h',
        },
        refreshToken: {
            secret: process.env.REFRESH_TOKEN_SECRET || 'refresh-secret',
            expiresIn: process.env.REFRESH_TOKEN_EXPIRES_IN || '7d',
        },
        verifyEmail: {
            secret: process.env.VERIFY_EMAIL_SECRET || 'verify-email-secret',
            expiresIn: process.env.VERIFY_EMAIL_EXPIRES_IN || '1d',
        },
        feApp: {
            url: process.env.FE_APP_URL || 'http://localhost:3000',
        },
        password: {
            saltLength: 8,
        },
        admin: {
            jwt: {
                accessToken: {
                    secretKey:
                        process.env.ADMIN_AUTH_JWT_ACCESS_TOKEN_SECRET_KEY ||
                        '5BuwR3WOUrhk6PWfgTYmx7gDuKjWGTrP',
                    expirationTime: '1d',
                    notBeforeExpirationTime: '0',
                },
                refreshToken: {
                    secretKey:
                        process.env.AUTH_JWT_REFRESH_TOKEN_SECRET_KEY ||
                        'ADMIN_AUTH_JWT_REFRESH_TOKEN_SECRET_KEY',
                    expirationTime: '7d',
                    expirationTimeRememberMe: '30d',
                    notBeforeExpirationTime: '1d',
                },
            },
        },
        google: {
            clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
            clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        },
        facebook: {
            appId: process.env.FACEBOOK_AUTH_APP_ID,
            appSecret: process.env.FACEBOOK_AUTH_APP_SECRET,
        },
    }),
);
