import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userLogin, userLogout } from "@app/redux";
import { LoginRes, User, UserSignupRes, UserWithName } from "@app/shared";
import { Store } from "@ngrx/store";
import { HOME_PAGE, LOCAL_STORAGE_KEY, LOGIN_ENDPOINT, SINGUP_ENPOINT } from "@utils";
import { HttpService } from "../http-service";

@Injectable()
export class LoginService {
  constructor(private store: Store, private httpService: HttpService, private route: Router) {}

  signup(signupUser: UserWithName) {
    this.httpService.post<UserWithName, UserSignupRes>(SINGUP_ENPOINT, signupUser).subscribe(() => {
      this.store.dispatch(userLogin());
    });
  }

  login(user: User): void {
    this.httpService.post<User, LoginRes>(LOGIN_ENDPOINT, user).subscribe((res) => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(res));
      this.store.dispatch(userLogin());
      this.route.navigateByUrl(HOME_PAGE);
    });
  }

  logout() {
    this.store.dispatch(userLogout());
  }

  autoLogin() {
    const localStorageData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (localStorageData) {
      // const token = JSON.parse(localStorageData) as LoginRes;
      this.store.dispatch(userLogin());
    }
  }
}
