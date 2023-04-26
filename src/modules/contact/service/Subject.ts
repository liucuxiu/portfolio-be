import { INotificationService } from '../../notification/NotificationService';

export abstract class Subject {
  private observerList: INotificationService[]= []

  public addObserver(observer: INotificationService) {
    this.observerList.push(observer)
  }

  public notifyObservers(contactDto: any) {
    for (let observer of this.observerList) {
      observer.sendMessage(contactDto)
    }
  }
}