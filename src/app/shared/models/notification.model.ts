import { Observable, Subject } from "rxjs";

export type NotificationType = "message" | "success" | "warning" | "error" | "spinner";

export interface NotificationBaseModel {
  type: NotificationType;
  message: string;
  duration?: number;
  submit?: boolean;
}

export interface NotificationRef {
  id: string;
  close: () => void;
  afterClose: Observable<any>;
}

export interface NotificationModel extends NotificationBaseModel {
  id: string;
  afterClose: Subject<any>;
}
