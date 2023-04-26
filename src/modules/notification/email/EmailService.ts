import { INotificationService } from '../NotificationService';

export class EmailService implements INotificationService {
  async sendMessage(contactDto: any): Promise<void> {
    console.log("send email")
  }

}