import { createSelector } from "@ngrx/store";
import { currentBoardFeature } from "@app/redux/reducers/current-board.reducer";

export const selectCurrentBoard = createSelector(currentBoardFeature.selectBoard, (board) => board);
export const selectCurrentBoardStatus = createSelector(currentBoardFeature.selectStatus, (status) => status);
