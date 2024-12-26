import { Body, Controller, Post } from '@nestjs/common';
import { MailerService } from '../mailer.service';
import { SendEmailDto } from '../dto/send-email.dto';

@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post('send')
  async sendEmails(@Body() sendEmailDto: SendEmailDto) {
    try {
      const { email1, email2, subject, info } = sendEmailDto;

      // Send email to the first address
      await this.mailerService.sendEmail(email1, subject, info);

      // Send email to the second address
      await this.mailerService.sendEmail(email2, subject, info);

      return { message: 'Emails sent successfully!' };
    } catch (error) {
      return { message: 'Email sending failed', error: error.message };
    }
  }
}
