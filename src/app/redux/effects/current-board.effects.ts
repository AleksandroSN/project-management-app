import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { CurrentBoardState } from "@app/redux";
import { BoardsService } from "@app/core/services/boards-service/boards.service";
import {
  getBoardById,
  getBoardByIdFailure,
  getBoardByIdSuccess,
} from "@app/redux/actions/current-board.action";
import { BoardModel } from "@app/shared";
import { Injectable } from "@angular/core";
import { switchMap, map, catchError } from "rxjs/operators";
import { of, from } from "rxjs";

@Injectable()
export class CurrentBoardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<CurrentBoardState>,
    private boardsService: BoardsService,
  ) {}

  getBoardById$ = createEffect(() => this.actions$.pipe(
    ofType(getBoardById),
    switchMap((request: { id: string }) => from(this.boardsService.getBoardById(request.id)).pipe(
      map((board: BoardModel) => getBoardByIdSuccess({ board })),
      catchError((error) => of(getBoardByIdFailure({ error }))),
    )),
  ));
}
