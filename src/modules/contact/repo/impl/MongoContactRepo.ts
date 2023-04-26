import { IContactRepo } from '../IContactRepo';

export class MongoContactRepo implements IContactRepo {
  save(contact: any): Promise<void> {
    return Promise.resolve(undefined);
  }
}