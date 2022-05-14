import jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userAuthorize, userLogout } from "@app/redux";
import { TokenModel, User, UserWithName } from "@app/shared";
import { Store } from "@ngrx/store";
import { checkExpTimeToken, LOCAL_STORAGE_KEY } from "@utils";
import { switchMap } from "rxjs";
import { UserService } from "../user-service";
import { NotificationsService } from "../notifications-service";

@Injectable()
export class AuthService {
  constructor(
    private store: Store,
    private route: Router,
    private userService: UserService,
    private notificationServise: NotificationsService,
  ) {}

  signup(signupUser: UserWithName): void {
    this.userService.createUser(signupUser).subscribe((res) => {
      this.login(res);
    });
  }

  login(user: User): void {
    const { id } = this.notificationServise.showNotification({
      type: "spinner",
      message: "Loading...",
      duration: 10000,
    });
    this.userService
      .authorizeUser(user)
      .pipe(
        switchMap(({ token }) => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
          const { userId } = jwt_decode(token) as TokenModel;
          return this.userService.getUserById(userId);
        }),
      )
      .subscribe((res) => {
        this.notificationServise.closeNotification(id);
        this.store.dispatch(userAuthorize({ user: res }));
        this.route.navigateByUrl("/board");
      });
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.store.dispatch(userLogout());
    this.route.navigateByUrl("/home");
  }

  autoLogin(redirectUrl: string) {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      const { userId, exp } = jwt_decode(localStorageData) as TokenModel;
      const isNotExpired = checkExpTimeToken(exp);
      if (isNotExpired) {
        this.userService.getUserById(userId).subscribe((res) => {
          this.store.dispatch(userAuthorize({ user: res }));
          this.route.navigateByUrl(redirectUrl);
        });
      } else {
        this.logout();
      }
    }
  }
}
