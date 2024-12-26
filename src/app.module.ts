import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailerService } from './mailer/mailer.service';
import { MailerController } from './mailer/controller/mailer.controller';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [MailerModule],
  controllers: [AppController, MailerController],
  providers: [AppService, MailerService],
})
export class AppModule {}
