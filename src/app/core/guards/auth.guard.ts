import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Router, UrlTree } from "@angular/router";
import { selectUserAuth } from "@app/redux";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  isLogged$!: Observable<boolean>;

  constructor(private router: Router, private store: Store) {
    this.isLogged$ = this.store.select(selectUserAuth);
  }

  canActivate() {
    return this.authorizationСheck();
  }

  canLoad(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authorizationСheck();
  }

  authorizationСheck() {
    this.isLogged$.subscribe((auth) => {
      if (!auth) {
        this.router.navigateByUrl("/auth/signin");
      }
    });
    return this.isLogged$;
  }
}
