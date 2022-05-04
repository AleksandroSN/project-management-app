import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { userAuthorize, userLogin } from "../actions";

@Injectable()
export class UserAuthorizeEffects {
  // eslint-disable-next-line arrow-body-style
  loggedUser$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(userAuthorize),
      map(() => userLogin()),
    );
  });

  constructor(private actions$: Actions) {}
}
