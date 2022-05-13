import { CurrentBoardState } from "@app/redux";
import { createFeature, createReducer, on } from "@ngrx/store";
import {
  getBoardById,
  getBoardByIdFailure,
  getBoardByIdSuccess,
} from "@app/redux/actions/current-board.action";
import { CURRENT_BOARD_KEY } from "@utils";
import { LoadingStatus } from "@app/shared/models/loading-status.model";

const initialState: CurrentBoardState = {
  board: undefined,
  error: null,
  status: LoadingStatus.PENDING,
};

export const currentBoardFeature = createFeature({
  name: CURRENT_BOARD_KEY,
  reducer: createReducer(
    initialState,
    on(
      getBoardById,
      (state): CurrentBoardState => ({
        ...state,
        status: LoadingStatus.LOADING,
      }),
    ),
    on(
      getBoardByIdSuccess,
      (state, { board }): CurrentBoardState => ({
        ...state,
        board,
        error: null,
        status: LoadingStatus.SUCCESS,
      }),
    ),
    on(
      getBoardByIdFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        error,
        status: LoadingStatus.ERROR,
      }),
    ),
  ),
});
