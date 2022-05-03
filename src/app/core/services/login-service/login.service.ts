import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { HttpService } from "../http-service";

@Injectable()
export class LoginService {
  constructor(private store: Store, private httpService: HttpService) {}

  login() {}

  logout() {}

  autoLogin() {}
}
