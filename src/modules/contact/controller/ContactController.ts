import { ContactService } from '../service/ContactService';

export class ContactController {
  private contactService: ContactService

  constructor(contactService: ContactService) {
    this.contactService = contactService
  }

  public async createContact(req: any, res: any): Promise<any> {
    const contactDto = req.body
    const result = await this.contactService.createContact(contactDto)

    res.send(result)

  }
}