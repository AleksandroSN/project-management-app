import { Injectable } from "@angular/core";
import {
  NotificationBaseModel,
  NotificationModel,
  NotificationRef,
} from "@app/shared/models/notification.model";
import { BehaviorSubject, Observable } from "rxjs";
import { v4 as uuid } from "uuid";

@Injectable()
export class NotificationsService {
  private defaultDuration = 3000;

  private orderSubject: BehaviorSubject<NotificationModel[]> = new BehaviorSubject<NotificationModel[]>([]);

  public order$: Observable<NotificationModel[]> = this.orderSubject.asObservable();

  public showNotification(notification: NotificationBaseModel): NotificationRef {
    const params = {
      duration: (notification.duration || 0) > 400 ? notification.duration : this.defaultDuration,
      id: uuid(),
    };
    const currOrder: NotificationModel[] = this.orderSubject.value;
    currOrder.push({
      ...notification,
      ...params,
    });
    this.orderSubject.next(currOrder);
    return {
      id: params.id,
      close: () => {
        this.closeNotification(params.id);
      },
    };
  }

  public closeNotification(id: string): void {
    const currOrder: NotificationModel[] = this.orderSubject.value;
    const index = currOrder.findIndex((item: NotificationModel) => item.id === id);
    currOrder.splice(index, 1);
    this.orderSubject.next(currOrder);
  }
}
