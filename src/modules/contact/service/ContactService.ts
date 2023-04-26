import { IContactRepo } from '../repo/IContactRepo';
import { Subject } from './Subject';

export class ContactService extends Subject {

  private contactRepo: IContactRepo

  constructor(contactRepo: IContactRepo) {
    super();
    this.contactRepo = contactRepo
  }

  async createContact(contactDto: any) {
    const saveResult = await this.contactRepo.save(contactDto)

    this.notifyObservers(contactDto)
  }
}