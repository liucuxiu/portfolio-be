import { INotificationService } from '../../NotificationService';
import nodemailer from 'nodemailer';

export class EmailService implements INotificationService {
  private static instance: EmailService;
  // @ts-ignore
  private transporter: nodemailer.Transporter;

  private constructor() {

  }

  static getInstance() {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async createLocalConnection() {
    let account = await nodemailer.createTestAccount();
    console.log(account);
    this.transporter = nodemailer.createTransport({
      name: 'example.com',
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  async sendMail(contactDto: any) {
    return await this.transporter
      .sendMail({
        from: `huhu@shitmail.me`,
        to: 'huhu@shitmail.me',
        subject: contactDto.subject,
        text: contactDto.message,
      })
      .then((info) => {
        console.log(`Mail sent successfully!!`,info );
        console.log(`[MailResponse]=${info.response} [MessageID]=${info.messageId}`);
        if (process.env.NODE_ENV === 'local') {
          console.log(`Nodemailer ethereal URL: ${nodemailer.getTestMessageUrl(
            info
          )}`);
        }
        return info;
      }).catch(err => {
        console.log(err);
      });
  }

  async verifyConnection() {
    return this.transporter.verify();
  }

  getTransporter() {
    return this.transporter;
  }

  async sendMessage(contactDto: any): Promise<void> {
    console.log('email sent', contactDto);
    return this.sendMail(contactDto);
  }
}