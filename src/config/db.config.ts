import { registerAs } from '@nestjs/config';

export default registerAs(
    'db',
    (): Record<string, any> => ({
        host: process.env.DB_HOST || 'mongodb://localhost:27017',
        name: process.env.DB_NAME || null,
        user: process.env.DB_USERNAME || null,
        password: process.env.DB_PASSWORD || null,
        debug: process.env.DATABASE_DEBUG === 'true' || false,
        options: process.env.DATABASE_OPTIONS,
    }),
);
