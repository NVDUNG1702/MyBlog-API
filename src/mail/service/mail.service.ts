import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from "@nestjs/common";
import { IMailOptions } from "../inteface/mail.inteface";

@Injectable()
export class MailService {
    constructor(private mailService: MailerService) {};

    async sendMail(mail: IMailOptions) {
        await this.mailService.sendMail({
            to: mail.to,
            subject: mail.subject,
            template: mail.template,
            context: mail.context,
        });
    }
}
