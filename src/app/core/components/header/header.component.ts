import { Component, OnInit } from "@angular/core";
import { NavigationStart, Router } from "@angular/router";
import { AuthService, NotificationsService, SidenavService } from "@app/core/services";
import { selectUserAuth } from "@app/redux";
import { TranslocoService } from "@ngneat/transloco";
import { Store } from "@ngrx/store";
import { filter, Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>;

  currentLang = "en";

  link = "";

  constructor(
    private store: Store,
    private router: Router,
    private authService: AuthService,
    private translocoService: TranslocoService,
    private notificationServise: NotificationsService,
    public sidenavService: SidenavService,
  ) {
    this.isAuth$ = this.store.select(selectUserAuth);
  }

  ngOnInit(): void {
    this.currentLang = this.translocoService.getActiveLang();
    this.router.events.pipe(filter((event) => event instanceof NavigationStart)).subscribe((event) => {
      if (!this.link) {
        this.link = (<any>event).url;
        this.authService.autoLogin(this.link);
      }
    });
  }

  logout() {
    this.notificationServise.showNotification({
      type: "message",
      message: "Good Bye !",
    });
    this.authService.logout();
  }

  toggleLang() {
    if (this.currentLang === "en") {
      this.currentLang = "ru";
    } else {
      this.currentLang = "en";
    }
    this.translocoService.setActiveLang(this.currentLang);
  }
}
