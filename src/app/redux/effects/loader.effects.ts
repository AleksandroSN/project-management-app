import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map } from "rxjs";
import { hideLoader, showLoader, userAuthorize, userLogin } from "../actions";

const showSpinnerActions = [userAuthorize];

const hideSpinnerActions = [userLogin];

@Injectable()
export class LoaderEffects {
  // eslint-disable-next-line arrow-body-style
  showSpinner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...showSpinnerActions),
      map(() => showLoader()),
    );
  });

  // eslint-disable-next-line arrow-body-style
  hideSpinner$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...hideSpinnerActions),
      map(() => hideLoader()),
    );
  });

  constructor(private actions$: Actions) {}
}
