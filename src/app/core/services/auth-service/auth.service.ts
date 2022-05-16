import jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userAuthorize, userLogout } from "@app/redux";
import { TokenModel, User, UserWithId, UserWithName } from "@app/shared";
import { Store } from "@ngrx/store";
import { checkExpTimeToken, clearLocalStorage, LOCAL_STORAGE_KEY, LOCAL_STORAGE_KEY_AUTH } from "@utils";
import { catchError, switchMap, throwError } from "rxjs";
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
    const loginNotification = this.notificationServise.showNotification({
      type: "spinner",
      message: "Loading...",
    });
    this.userService
      .authorizeUser(user)
      .pipe(
        switchMap(({ token }) => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
          const { userId } = jwt_decode(token) as TokenModel;
          return this.userService.getUserById(userId);
        }),
        catchError((err) => {
          loginNotification.close();
          return throwError(() => err);
        }),
      )
      .subscribe((res) => {
        localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, JSON.stringify(res));
        this.store.dispatch(userAuthorize({ user: res }));
        this.route.navigateByUrl("/board");
        loginNotification.close();
      });
  }

  logout() {
    clearLocalStorage();
    this.store.dispatch(userLogout());
    this.route.navigateByUrl("/home");
  }

  autoLogin(redirectUrl: string) {
    this.updateUserFormLS();
    const token = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (token) {
      const { userId, exp } = jwt_decode(token) as TokenModel;
      const isNotExpired = checkExpTimeToken(exp);
      if (isNotExpired) {
        this.updateUserData(userId, redirectUrl);
      } else {
        this.notificationServise.showNotification({
          type: "error",
          message: "Session expired",
        });
        this.logout();
      }
    }
  }

  updateUserFormLS() {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY_AUTH);
    if (localStorageData) {
      const authData = JSON.parse(localStorageData) as UserWithId;
      this.store.dispatch(userAuthorize({ user: authData }));
      this.notificationServise.showNotification({
        type: "message",
        message: "Welcome back",
      });
    }
  }

  updateUserData(userId: string, redirectUrl: string) {
    this.userService.getUserById(userId).subscribe((res) => {
      localStorage.setItem(LOCAL_STORAGE_KEY_AUTH, JSON.stringify(res));
      this.store.dispatch(userAuthorize({ user: res }));
      this.route.navigateByUrl(redirectUrl);
    });
  }
}
