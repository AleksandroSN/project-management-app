import { Component, OnDestroy, OnInit } from "@angular/core";
import { AuthService, NotificationsService, SidenavService } from "@app/core/services";
import { selectUserAuth } from "@app/redux";
import { Store } from "@ngrx/store";
import { Observable, Subject, takeUntil } from "rxjs";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.scss"],
})
export class SidenavComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  isAuth$!: Observable<boolean>;

  isOpen = false;

  constructor(
    private sidenavServise: SidenavService,
    private store: Store,
    private authService: AuthService,
    private notificationServise: NotificationsService,
  ) {
    this.isAuth$ = this.store.select(selectUserAuth);
  }

  ngOnInit(): void {
    this.sidenavServise.isOpen$.pipe(takeUntil(this.destroy$)).subscribe((open) => {
      this.isOpen = open;
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  logout() {
    this.sidenavServise.close();
    this.notificationServise.showNotification({
      type: "message",
      message: "Good Bye !",
    });
    this.authService.logout();
  }

  close() {
    this.sidenavServise.close();
  }
}
