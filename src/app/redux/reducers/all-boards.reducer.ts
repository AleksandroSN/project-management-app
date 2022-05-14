import { createFeature, createReducer, on } from "@ngrx/store";
import { ALL_BOARDS_FEATURE_KEY } from "@utils";
import { getAllBoards, getAllBoardsSuccess } from "../actions";
import { AllBoardState } from "../state.models";

const INITIAL_STATE: AllBoardState = {
  boards: null,
  error: null,
  status: "pending",
};

export const allBoardsFeature = createFeature({
  name: ALL_BOARDS_FEATURE_KEY,
  reducer: createReducer(
    INITIAL_STATE,
    on(
      getAllBoards,
      (state): AllBoardState => ({
        ...state,
        status: "loading",
      }),
    ),
    on(
      getAllBoardsSuccess,
      (state, { boards }): AllBoardState => ({
        ...state,
        boards,
        status: "success",
      }),
    ),
  ),
});
