import { createAction, props } from "@ngrx/store";
import {
  BoardModel,
  ColumnBodyModel,
  ColumnModel,
  ExtendedColumnModel,
  TaskBodyModel,
  TaskModel,
} from "@app/shared";

const reduxStateName = "Current Board State";

export class GenerateApiAction {
  constructor(name: string, message: string) {
    // @ts-ignore
    this[`${name}`] = createAction(`${message}`);

    // @ts-ignore
    this[`${name}Success`] = createAction(`${message}`, props<any>());

    // @ts-ignore
    this[`${name}Failure`] = createAction(`${message}`, props<{ error: any }>());
  }
}

// Set Pending State
// ===============

export const setPendingState = createAction(`[${reduxStateName}] Set Pending State`);

// ===============

// Destroy Current Board
// ===============

export const destroyCurrentBoard = createAction(`[${reduxStateName}] Destroy Current Board`);

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

// Move Column
// ===============

export const moveColumn = createAction(
  `[${reduxStateName}] Move column (Progress)`,
  props<{
    boardId: string;
    column: ColumnModel;
    columns: ColumnModel[];
    previousIndex: number;
    currentIndex: number;
  }>(),
);

export const moveColumnSuccess = createAction(
  `[${reduxStateName}] Move column (Success)`,
  props<{ column: ColumnModel }>(),
);

export const moveColumnFailure = createAction(
  `[${reduxStateName}] Move column (Failure)`,
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
  props<{ boardId: string; column: ExtendedColumnModel; columns: ColumnModel[] }>(),
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

// Create Task
// ===============

export const createTask = createAction(
  `[${reduxStateName}] Create task (Progress)`,
  props<{ boardId: string; columnId: string; task: TaskBodyModel }>(),
);

export const createTaskSuccess = createAction(
  `[${reduxStateName}] Create task (Success)`,
  props<{ task: TaskModel }>(),
);

export const createTaskFailure = createAction(
  `[${reduxStateName}] Create task (Failure)`,
  props<{ error: any }>(),
);

// ===============

// Update Task
// ===============

export const updateTask = createAction(
  `[${reduxStateName}] Update task (Progress)`,
  props<{ boardId: string; columnId: string; taskId: string; task: TaskBodyModel }>(),
);

export const updateTaskSuccess = createAction(
  `[${reduxStateName}] Update task (Success)`,
  props<{ task: TaskModel }>(),
);

export const updateTaskFailure = createAction(
  `[${reduxStateName}] Update task (Failure)`,
  props<{ error: any }>(),
);

// ===============

// Delete Task
// ===============

export const deleteTask = createAction(
  `[${reduxStateName}] Delete task (Progress)`,
  props<{ boardId: string; columnId: string; taskId: string }>(),
);

export const deleteTaskSuccess = createAction(
  `[${reduxStateName}] Delete task (Success)`,
  props<{ task: TaskModel }>(),
);

export const deleteTaskFailure = createAction(
  `[${reduxStateName}] Delete task (Failure)`,
  props<{ error: any }>(),
);

// ===============
