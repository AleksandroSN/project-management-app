/* eslint-disable @typescript-eslint/no-unused-vars */
import { createFeature, createReducer, on } from "@ngrx/store";
import {
  getBoardById,
  getBoardByIdFailure,
  getBoardByIdSuccess,
  setPendingState,
  createColumn,
  createColumnFailure,
  createColumnSuccess,
  destroyCurrentBoard,
  updateColumn,
  updateColumnSuccess,
  updateColumnFailure,
  deleteColumn,
  deleteColumnSuccess,
  deleteColumnFailure,
  createTask,
  createTaskSuccess,
  createTaskFailure,
  updateTask,
  updateTaskSuccess,
  updateTaskFailure,
  deleteTask,
  deleteTaskSuccess,
  deleteTaskFailure,
  moveColumn,
  moveColumnSuccess,
  moveColumnFailure,
} from "@app/redux/actions/current-board.action";
import { CurrentBoardState } from "@app/redux";
import { CURRENT_BOARD_KEY } from "@utils";
import { LoadingStatus } from "@app/shared/models/loading-status.model";

export const initialState: CurrentBoardState = {
  board: undefined,
  status: {
    type: LoadingStatus.PENDING,
    info: null,
    code: null,
  },
};

export const currentBoardFeature = createFeature({
  name: CURRENT_BOARD_KEY,
  reducer: createReducer(
    initialState,
    on(
      setPendingState,
      (state): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PENDING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      destroyCurrentBoard,
      (state): CurrentBoardState => ({
        ...state,
        board: undefined,
        status: {
          type: LoadingStatus.PENDING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      getBoardById,
      (state, { id }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      getBoardByIdSuccess,
      (state, { board }): CurrentBoardState => ({
        ...state,
        board,
        status: {
          type: LoadingStatus.SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      getBoardByIdFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      createColumn,
      (state, { boardId, column }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      createColumnSuccess,
      (state, { column }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      createColumnFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      moveColumn,
      (state, { boardId, column, columns, currentIndex, previousIndex }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      moveColumnSuccess,
      (state, { column }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      moveColumnFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      updateColumn,
      (state, { boardId, columnId, column }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      updateColumnSuccess,
      (state, { column }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      updateColumnFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      deleteColumn,
      (state, { boardId, column, columns }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      deleteColumnSuccess,
      (state, { column }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      deleteColumnFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      createTask,
      (state, { boardId, columnId, task }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      createTaskSuccess,
      (state, { task }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      createTaskFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      updateTask,
      (state, { boardId, columnId, taskId, task }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      updateTaskSuccess,
      (state, { task }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      updateTaskFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
    on(
      deleteTask,
      (state, { boardId, column, task }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.LOADING,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      deleteTaskSuccess,
      (state, { task }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.PRE_SUCCESS,
          info: null,
          code: null,
        },
      }),
    ),
    on(
      deleteTaskFailure,
      (state, { error }): CurrentBoardState => ({
        ...state,
        status: {
          type: LoadingStatus.ERROR,
          info: error.error.message,
          code: error.status,
        },
      }),
    ),
  ),
});
