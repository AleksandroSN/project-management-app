import jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userAuthorize, userLogout } from "@app/redux";
import {
 LoginRes, TokenModel, User, UserSignupRes, UserWithId, UserWithName
} from "@app/shared";
import { Store } from "@ngrx/store";
import { LOCAL_STORAGE_KEY, LOGIN_ENDPOINT, SINGUP_ENPOINT, USERS_ENDPOINT } from "@utils";
import { switchMap } from "rxjs";
import { HttpService } from "../http-service";

@Injectable()
export class LoginService {
  constructor(private store: Store, private httpService: HttpService, private route: Router) {}

  signup(signupUser: UserWithName) {
    this.httpService
      .post<UserWithName, UserSignupRes>(SINGUP_ENPOINT, signupUser)
      .pipe(
        switchMap((res) => {
          this.store.dispatch(userAuthorize({ user: res }));
          const user: User = {
            login: signupUser.login,
            password: signupUser.password,
          };
          return this.httpService.post<User, LoginRes>(LOGIN_ENDPOINT, user);
        }),
      )
      .subscribe(({ token }) => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
        this.route.navigateByUrl("home");
      });
    // or subscribe on first POST and invoke this.login ?
  }

  login(user: User): void {
    this.httpService
      .post<User, LoginRes>(LOGIN_ENDPOINT, user)
      .pipe(
        switchMap(({ token }) => {
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(token));
          const { userId } = jwt_decode(token) as TokenModel;
          return this.httpService.get<UserWithId>(`${USERS_ENDPOINT}/${userId}`);
        }),
      )
      .subscribe((res) => {
        this.route.navigateByUrl("home");
        this.store.dispatch(userAuthorize({ user: res }));
      });
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.store.dispatch(userLogout());
    this.route.navigateByUrl("home");
  }

  autoLogin() {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      const { userId, exp } = jwt_decode(localStorageData) as TokenModel;
      const currentTimeInSeconds = Date.now() / 1000;
      if (exp > currentTimeInSeconds) {
        this.httpService.get<UserWithId>(`${USERS_ENDPOINT}/${userId}`).subscribe((res) => {
          this.route.navigateByUrl("home");
          this.store.dispatch(userAuthorize({ user: res }));
        });
      } else {
        this.logout();
      }
    }
  }
}
