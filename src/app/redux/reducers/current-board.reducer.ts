import { CurrentBoardState } from "@app/redux";
import { createFeature, createReducer, on } from "@ngrx/store";
import {
  getBoardById,
  getBoardByIdFailure,
  getBoardByIdSuccess,
} from "@app/redux/actions/current-board.action";
import { CURRENT_BOARD_KEY } from "@utils";
import { LoadingStatus } from "@app/shared/models/loading-status.model";

export const initialState: CurrentBoardState = {
  board: undefined,
  status: {
    type: LoadingStatus.PENDING,
    info: null,
  },
};

export const currentBoardFeature = createFeature({
  name: CURRENT_BOARD_KEY,
  reducer: createReducer(
    initialState,
    on(getBoardById, (state, { id }) => ({
      ...state,
      status: {
        type: LoadingStatus.LOADING,
        info: null,
      },
    })),
    on(getBoardByIdSuccess, (state, { board }) => ({
      ...state,
      board,
      status: {
        type: LoadingStatus.SUCCESS,
        info: null,
      },
    })),
    on(getBoardByIdFailure, (state, { error }) => ({
      ...state,
      status: {
        type: LoadingStatus.ERROR,
        info: error,
      },
    })),
  ),
});
