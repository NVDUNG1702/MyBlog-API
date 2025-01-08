import { registerAs } from '@nestjs/config';

export default registerAs(
    'mail',
    (): Record<string, any> => ({
        mailForm: process.env.MAIL_FORM,
        host: process.env.MAIL_HOST,
        user: process.env.MAIL_USER,
        password: process.env.MAIL_PASSWORD,
        port: process.env.MAIL_PORT,
    }),
);
