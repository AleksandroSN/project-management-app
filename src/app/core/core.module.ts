import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HeaderComponent, FooterComponent } from "./components";
import { AuthGuard } from "./guards";
import { NotFoundComponent } from "./pages";
import {
  HttpService,
  InputValidationService,
  AuthService,
  UserService,
  ModalService,
  ProfileService,
  NotificationsService,
} from "./services";
import { NotificationItemComponent } from "./components/notification-item/notification-item.component";
import { NotificationsListComponent } from "./components/notifications-list/notifications-list.component";

@NgModule({
  // eslint-disable-next-line max-len
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NotificationItemComponent,
    NotificationsListComponent,
  ],
  providers: [
    HttpService,
    InputValidationService,
    AuthService,
    AuthGuard,
    UserService,
    ModalService,
    ProfileService,
    NotificationsService,
  ],
  imports: [SharedModule, MatProgressSpinnerModule],
  exports: [HeaderComponent, FooterComponent, NotificationsListComponent],
})
export class CoreModule {}
