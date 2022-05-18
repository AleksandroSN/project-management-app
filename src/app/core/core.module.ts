import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSidenavModule } from "@angular/material/sidenav";
import { HeaderComponent, FooterComponent, SidenavComponent } from "./components";
import { TranslocoModule } from "@ngneat/transloco";
import { MatRippleModule } from "@angular/material/core";
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
  declarations: [
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    NotificationItemComponent,
    NotificationsListComponent,
    SidenavComponent,
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
  imports: [SharedModule, MatProgressSpinnerModule, MatSidenavModule],
  exports: [HeaderComponent, FooterComponent, NotificationsListComponent, SidenavComponent, MatSidenavModule],
  imports: [SharedModule, MatProgressSpinnerModule, TranslocoModule, MatRippleModule],
  exports: [HeaderComponent, FooterComponent, NotificationsListComponent],
})
export class CoreModule {}
