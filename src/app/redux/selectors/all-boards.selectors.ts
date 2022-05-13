import { createSelector } from "@ngrx/store";
import { allBoardsFeature } from "../reducers";

export const selectAllBoards = createSelector(allBoardsFeature.selectBoards, (boards) => boards);
export const selectAllBoardStatus = createSelector(allBoardsFeature.selectStatus, (status) => status);
