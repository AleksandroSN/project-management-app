export type NotificationType = "message" | "success" | "warning" | "error" | "spinner";

export interface NotificationBaseModel {
  type: NotificationType;
  message: string;
  duration?: number;
}

export interface NotificationRef {
  id: string;
  close: () => void;
}

export interface NotificationModel extends NotificationBaseModel {
  id: string;
}
