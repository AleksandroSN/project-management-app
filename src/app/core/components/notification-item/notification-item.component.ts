import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { NotificationModel } from "@app/shared/models/notification.model";

@Component({
  selector: "app-notification-item",
  templateUrl: "./notification-item.component.html",
  styleUrls: ["./notification-item.component.scss"],
})
export class NotificationItemComponent implements OnInit {
  @Input() public notificationData!: NotificationModel;

  @Output() public closeNotificationEvent = new EventEmitter();

  public ngOnInit(): void {
    if (this.notificationData.type !== "spinner") {
      setTimeout(() => {
        this.closeNotificationEvent.emit();
      }, this.notificationData.duration);
    }
  }
}
