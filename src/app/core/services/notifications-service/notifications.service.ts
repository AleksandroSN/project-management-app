import { Injectable } from "@angular/core";
import { NotificationBaseModel, NotificationModel, NotificationRef } from "@app/shared/models";
import { BehaviorSubject, Observable, Subject, take } from "rxjs";
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
    const similarIndex = currOrder.findIndex((item) => item.message === notification.message);
    const afterClose: Subject<any> = new Subject<any>();
    if (similarIndex > -1) {
      currOrder.splice(similarIndex, 1, {
        ...notification,
        ...params,
        afterClose,
      });
    } else {
      currOrder.push({
        ...notification,
        ...params,
        afterClose,
      });
    }
    this.orderSubject.next(currOrder);
    return {
      id: params.id,
      close: () => {
        this.closeNotification(params.id);
      },
      afterClose: afterClose.pipe(take(1)),
    };
  }

  public closeNotification(id: string): void {
    const currOrder: NotificationModel[] = this.orderSubject.value;
    const index = currOrder.findIndex((item: NotificationModel) => item.id === id);
    if (index === -1) {
      return;
    }
    const closedNotification: NotificationModel = currOrder.splice(index, 1)[0];
    // @ts-ignore
    closedNotification.afterClose.next();
    this.orderSubject.next(currOrder);
  }
}
