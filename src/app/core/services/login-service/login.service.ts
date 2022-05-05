import jwt_decode from "jwt-decode";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userAuthorize, userLogout } from "@app/redux";
import { LoginRes, TokenModel, User, UserSignupRes, UserWithId, UserWithName } from "@app/shared";
import { Store } from "@ngrx/store";
import {
  HOME_PAGE,
  LOCAL_STORAGE_KEY,
  LOGIN_ENDPOINT,
  SINGUP_ENPOINT,
  USERS_ENDPOINT,
} from "@utils";
import { switchMap } from "rxjs";
import { HttpService } from "../http-service";

@Injectable()
export class LoginService {
  constructor(private store: Store, private httpService: HttpService, private route: Router) {}

  signup(signupUser: UserWithName) {
    this.httpService.post<UserWithName, UserSignupRes>(SINGUP_ENPOINT, signupUser).subscribe(() => {
      const user: User = {
        login: signupUser.login,
        password: signupUser.password,
      };
      this.login(user);
    });
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
        this.route.navigateByUrl(HOME_PAGE);
        this.store.dispatch(userAuthorize({ user: res }));
      });
  }

  logout() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    this.store.dispatch(userLogout());
    this.route.navigateByUrl(HOME_PAGE);
  }

  autoLogin() {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      // check token on lifetime
      const { userId } = jwt_decode(localStorageData) as TokenModel;
      this.httpService.get<UserWithId>(`${USERS_ENDPOINT}/${userId}`).subscribe((res) => {
        this.route.navigateByUrl(HOME_PAGE);
        this.store.dispatch(userAuthorize({ user: res }));
      });
    }
  }
}
