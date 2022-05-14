import { BoardModel } from "@app/shared";
import { createAction, props } from "@ngrx/store";
import { AllBoardsActionsName } from "@utils";

export const getAllBoards = createAction(AllBoardsActionsName.LOAD_START);
export const getAllBoardsSuccess = createAction(
  AllBoardsActionsName.LOAD_SUCCESS,
  props<{ boards: BoardModel[] }>(),
);
export const getAllBoardsFailure = createAction(AllBoardsActionsName.LOAD_FAILURE);
