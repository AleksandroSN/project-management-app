import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { userAuthorize } from "@app/redux";
import { UserWithName } from "@app/shared";
import { Store } from "@ngrx/store";
import { AuthService } from "../auth-service";
import { UserService } from "../user-service";

@Injectable()
export class ProfileService {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private store: Store,
    private router: Router,
  ) {}

  deleteProfile(userID: string) {
    this.userService.deleteUser(userID).subscribe(() => {
      this.authService.logout();
    });
  }

  updateProfile(userID: string, body: UserWithName) {
    this.userService.updateUser(userID, body).subscribe((res) => {
      this.store.dispatch(userAuthorize({ user: res }));
      this.router.navigateByUrl("/home");
    });
  }
}
