import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'gmail', // Use your email service
      auth: {
        user: process.env.email, // Your email
        pass: process.env.password, // Your email password or app password
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string): Promise<void> {
    try {
      const mailOptions = { from: 'your-email@gmail.com', to, subject, text };
      await this.transporter.sendMail(mailOptions);
    } catch (error) {
      console.error(`Failed to send email to ${to}:`, error.message);
      throw new Error('Email sending failed');
    }
  }
}
