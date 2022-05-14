import { createAction, props } from "@ngrx/store";
import { BoardModel, ColumnBodyModel, ColumnModel } from "@app/shared";

const reduxStateName = "Current Board State";

// Get Board By ID
// ===============

export const getBoardById = createAction(
  `[${reduxStateName}] Get the board by id (Progress)`,
  props<{ id: string }>(),
);

export const getBoardByIdSuccess = createAction(
  `[${reduxStateName}] Get the board by id (Success)`,
  props<{ board: BoardModel }>(),
);

export const getBoardByIdFailure = createAction(
  `[${reduxStateName}] Get the board by id (Failure)`,
  props<{ error: string }>(),
);

// ===============

// Create Column
// ===============

export const createColumn = createAction(
  `[${reduxStateName}] Create column (Progress)`,
  props<{ boardId: string; column: ColumnBodyModel }>(),
);

export const createColumnSuccess = createAction(
  `[${reduxStateName}] Create column (Success)`,
  props<{ column: ColumnModel }>(),
);

export const createColumnFailure = createAction(
  `[${reduxStateName}] Create column (Failure)`,
  props<{ error: string }>(),
);

// ===============

// Update Column
// ===============

export const updateColumn = createAction(
  `[${reduxStateName}] Update column (Progress)`,
  props<{ boardId: string; columnId: string; column: ColumnBodyModel }>(),
);

export const updateColumnSuccess = createAction(
  `[${reduxStateName}] Update column (Success)`,
  props<{ column: ColumnModel }>(),
);

export const updateColumnFailure = createAction(
  `[${reduxStateName}] Update column (Failure)`,
  props<{ error: string }>(),
);

// ===============

// Delete Column
// ===============

export const deleteColumn = createAction(
  `[${reduxStateName}] Delete column (Progress)`,
  props<{ boardId: string; columnId: string; column: ColumnBodyModel }>(),
);

export const deleteColumnSuccess = createAction(
  `[${reduxStateName}] Delete column (Success)`,
  props<{ column: ColumnModel }>(),
);

export const deleteColumnFailure = createAction(
  `[${reduxStateName}] Delete column (Failure)`,
  props<{ error: string }>(),
);

// ===============
