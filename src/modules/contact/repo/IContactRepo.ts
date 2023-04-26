export interface IContactRepo {
  save(contact: any): Promise<void>
}