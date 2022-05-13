/* eslint-disable arrow-body-style */
import { Injectable } from "@angular/core";
import { BoardsService } from "@app/core/services";
import { createEffect, ofType, Actions } from "@ngrx/effects";
import { map, switchMap } from "rxjs";
import { getAllBoards, getAllBoardsSuccess } from "../actions";

@Injectable()
export class AllBoardsEffects {
  allBoards$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getAllBoards),
      switchMap(() => {
        return this.boardsService.getAllBoards().pipe(map((boards) => getAllBoardsSuccess({ boards })));
      }),
    );
  });

  constructor(private actions$: Actions, private boardsService: BoardsService) {}
}
