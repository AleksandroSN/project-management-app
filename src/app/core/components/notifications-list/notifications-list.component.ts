import { Component } from "@angular/core";
import { NotificationsService } from "@app/core/services/notifications-service/notifications.service";
import { animate, style, transition, trigger } from "@angular/animations";

@Component({
  selector: "app-notifications-list",
  templateUrl: "./notifications-list.component.html",
  styleUrls: ["./notifications-list.component.scss"],
  animations: [
    trigger("fade", [
      transition("void => *", [style({ opacity: 0 }), animate(1000, style({ opacity: 1 }))]),
      transition("* => void", [animate(1000, style({ opacity: 0 }))]),
    ]),
  ],
})
export class NotificationsListComponent {
  constructor(public notificationsService: NotificationsService) {}
}
