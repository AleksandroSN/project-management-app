import { createAction, props } from "@ngrx/store";
import { BoardModel, ColumnBodyModel, ColumnModel } from "@app/shared";

const reduxStateName = "Current Board State";

export class GenerateApiAction {
  constructor(
    name: string,
    message: string,
  ) {
    // @ts-ignore
    this[`${name}`] = createAction(
      `${message}`,
    );

    // @ts-ignore
    this[`${name}Success`] = createAction(
      `${message}`,
      props<any>(),
    );

    // @ts-ignore
    this[`${name}Failure`] = createAction(
      `${message}`,
      props<{ error: any }>(),
    );
  }
}

// Set Pending State
// ===============

export const setPendingState = createAction(
  `[${reduxStateName}] Set Pending State`,
);

// ===============

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
  props<{ error: any }>(),
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
  props<{ error: any }>(),
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
  props<{ error: any }>(),
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
  props<{ error: any }>(),
);

// ===============
