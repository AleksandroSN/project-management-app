import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";

@Injectable()
export class LoginService {
  constructor(private store: Store) {}

  login() {}

  logout() {}

  autoLogin() {}
}
