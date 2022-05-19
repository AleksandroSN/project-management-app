import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NotificationModel } from "@app/shared/models";

@Component({
  selector: "app-notification-item",
  templateUrl: "./notification-item.component.html",
  styleUrls: ["./notification-item.component.scss"],
})
export class NotificationItemComponent implements OnInit {
  @Input() public notificationData!: NotificationModel;

  @Output() public closeNotificationEvent = new EventEmitter();

  public themes = {
    spinner: {
      icon: "",
      color: "rgba(63, 81, 181, 0.85)",
    },
    message: {
      icon: "notifications",
      color: "rgba(63, 81, 181, 0.85)",
    },
    success: {
      icon: "done",
      color: "rgba(15,81,50,0.85)",
    },
    warning: {
      icon: "warning",
      color: "rgba(215,162,10,0.85)",
    },
    error: {
      icon: "error",
      color: "rgba(132,32,41,0.85)",
    },
  };

  public ngOnInit(): void {
    if (this.notificationData.type !== "spinner" && !this.notificationData.submit) {
      setTimeout(() => {
        this.closeNotificationEvent.emit();
      }, this.notificationData.duration);
    }
  }
}
