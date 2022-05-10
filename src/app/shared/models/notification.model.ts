export type NotificationType = "message" | "spinner";

export interface NotificationBaseModel {
  type: NotificationType;
  message: string;
  duration?: number;
  bgColor?: string;
  contentColor?: string;
}

export interface NotificationRef {
  id: string;
  close: () => void;
}

export interface NotificationModel extends NotificationBaseModel {
  id: string;
}
