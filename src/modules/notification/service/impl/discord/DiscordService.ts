import { INotificationService } from '../../NotificationService';

export class DiscordService implements INotificationService {
  async sendMessage(contactDto: any): Promise<void> {
    console.log("discord sent", contactDto)

    const webhook = process.env.DISCORD_WEBHOOK as string

    const response = await fetch(webhook, {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        content:
          `Name: ${contactDto.username}\n` +
          `Email: ${contactDto.email}\n` +
          `Subject: ${contactDto.subject}\n` +
          `Message: ${contactDto.message}\n`
      })
    })
  }

}