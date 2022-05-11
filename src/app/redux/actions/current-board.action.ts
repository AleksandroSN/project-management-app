import { createAction, props } from "@ngrx/store";
import { BoardModel } from "@app/shared";

// Get Board By ID
// ===============

export const getBoardById = createAction(
  "[Boards API] Get the board by id (Progress)",
  props<{ id: string }>(),
);

export const getBoardByIdSuccess = createAction(
  "[Boards API] Get the board by id (Success)",
  props<{ board: BoardModel }>(),
);

export const getBoardByIdFailure = createAction(
  "[Boards API] Get the board by id (Failure)",
  props<{ error: string }>(),
);

// ===============
