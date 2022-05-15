import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
  CurrentBoardState,
  createColumn,
  createColumnFailure,
  createColumnSuccess,
  createTask,
  createTaskFailure,
  createTaskSuccess,
  deleteColumn,
  deleteColumnFailure,
  deleteColumnSuccess,
  deleteTask,
  deleteTaskFailure,
  deleteTaskSuccess,
  updateColumn,
  updateColumnFailure,
  updateColumnSuccess,
  updateTask,
  updateTaskFailure,
  updateTaskSuccess,
} from "@app/redux";
import {
  getBoardById,
  getBoardByIdFailure,
  getBoardByIdSuccess,
} from "@app/redux/actions/current-board.action";
import { BoardModel, ColumnBodyModel, ColumnModel, TaskBodyModel, TaskModel } from "@app/shared";
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";
import { EntitiesService } from "@app/core/services/entities-service/entities.service";

@Injectable()
export class CurrentBoardEffects {
  constructor(
    private actions$: Actions,
    private store: Store<CurrentBoardState>,
    private entitiesService: EntitiesService,
  ) {
  }

  getBoardById$ = createEffect(() => this.actions$.pipe(
    ofType(getBoardById),
    switchMap((request: { id: string }) => this.entitiesService.boards.getBoardById(request.id).pipe(
      map((board: BoardModel) => getBoardByIdSuccess({ board })),
      catchError((error) => of(getBoardByIdFailure({ error }))),
    )),
  ));

  createColumn$ = createEffect(() => this.actions$.pipe(
    ofType(createColumn),
    // eslint-disable-next-line max-len
    switchMap((request: { boardId: string, column: ColumnBodyModel }) => this.entitiesService.columns.createColumn(request.boardId, request.column)
      .pipe(
        map((column: ColumnModel) => createColumnSuccess({ column })),
        catchError((error) => of(createColumnFailure({ error }))),
        finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
      )),
  ));

  updateColumn$ = createEffect(() => this.actions$.pipe(
    ofType(updateColumn),
    // eslint-disable-next-line max-len
    switchMap((request: { boardId: string, columnId: string, column: ColumnBodyModel }) => this.entitiesService.columns.updateColumn(request.boardId, request.columnId, request.column)
      .pipe(
        map((column: ColumnModel) => updateColumnSuccess({ column })),
        catchError((error) => of(updateColumnFailure({ error }))),
        finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
      )),
  ));

  deleteColumn$ = createEffect(() => this.actions$.pipe(
    ofType(deleteColumn),
    // eslint-disable-next-line max-len
    switchMap((request: { boardId: string, columnId: string }) => this.entitiesService.columns.deleteColumn(request.boardId, request.columnId)
      .pipe(
        map((column: ColumnModel) => deleteColumnSuccess({ column })),
        catchError((error) => of(deleteColumnFailure({ error }))),
        finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
      )),
  ));

  createTask$ = createEffect(() => this.actions$.pipe(
    ofType(createTask),
    // eslint-disable-next-line max-len
    switchMap((request: { boardId: string, columnId: string, task: TaskBodyModel }) => this.entitiesService.tasks.createTask(request.boardId, request.columnId, request.task)
      .pipe(
        map((task: TaskModel) => createTaskSuccess({ task })),
        catchError((error) => of(createTaskFailure({ error }))),
        finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
      )),
  ));

  updateTask$ = createEffect(() => this.actions$.pipe(
    ofType(updateTask),
    // eslint-disable-next-line max-len
    switchMap((request: { boardId: string, columnId: string, taskId: string, task: TaskBodyModel }) => this.entitiesService.tasks.updateTask(request.boardId, request.columnId, request.taskId, request.task)
      .pipe(
        map((task: TaskModel) => updateTaskSuccess({ task })),
        catchError((error) => of(updateTaskFailure({ error }))),
        finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
      )),
  ));

  deleteTask$ = createEffect(() => this.actions$.pipe(
    ofType(deleteTask),
    // eslint-disable-next-line max-len
    switchMap((request: { boardId: string, columnId: string, taskId: string }) => this.entitiesService.tasks.deleteTask(request.boardId, request.columnId, request.taskId)
      .pipe(
        map((task: TaskModel) => deleteTaskSuccess({ task })),
        catchError((error) => of(deleteTaskFailure({ error }))),
        finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
      )),
  ));
}
