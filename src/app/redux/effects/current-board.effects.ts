/* eslint-disable ngrx/no-dispatch-in-effects */
/* eslint-disable arrow-body-style */
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import {
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
  moveColumn,
  moveColumnSuccess,
  moveColumnFailure,
  moveTask,
  moveTaskSuccess,
  moveTaskFailure,
} from "@app/redux";
import {
  getBoardById,
  getBoardByIdFailure,
  getBoardByIdSuccess,
} from "@app/redux/actions/current-board.action";
import {
  BoardModel,
  ColumnBodyModel,
  ColumnModel,
  ExtendedColumnModel,
  TaskBodyModel,
  TaskModel,
} from "@app/shared";
import { Injectable } from "@angular/core";
import { switchMap, map, catchError, finalize } from "rxjs/operators";
import { of } from "rxjs";
import { EntitiesService } from "@app/core/services/entities-service/entities.service";

@Injectable()
export class CurrentBoardEffects {
  constructor(private actions$: Actions, private store: Store, private entitiesService: EntitiesService) {}

  getBoardById$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getBoardById),
      switchMap((request: { id: string }) => {
        return this.entitiesService.boards.getBoardById(request.id).pipe(
          map((board: BoardModel) => {
            board.columns?.sort((a, b) => a.order - b.order);
            board.columns?.forEach((column) => {
              column.tasks?.sort((a, b) => a.order - b.order);
            });
            return getBoardByIdSuccess({ board });
          }),
          catchError((error) => of(getBoardByIdFailure({ error }))),
        );
      }),
    );
  });

  createColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createColumn),
      switchMap((request: { boardId: string; column: ColumnBodyModel }) => {
        return this.entitiesService.columns.createColumn(request.boardId, request.column).pipe(
          map((column: ColumnModel) => createColumnSuccess({ column })),
          catchError((error) => of(createColumnFailure({ error }))),
          finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
        );
      }),
    );
  });

  moveColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moveColumn),
      switchMap(
        (request: {
          boardId: string;
          column: ColumnModel;
          columns: ColumnModel[];
          previousIndex: number;
          currentIndex: number;
        }) => {
          return this.entitiesService.columns
            .moveColumn(
              request.boardId,
              request.column,
              request.columns,
              request.previousIndex,
              request.currentIndex,
            )
            .pipe(
              map((column: ColumnModel[]) => moveColumnSuccess({ column: column[column.length - 1] })),
              catchError((error) => of(moveColumnFailure({ error }))),
              finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
            );
        },
      ),
    );
  });

  updateColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateColumn),
      switchMap((request: { boardId: string; columnId: string; column: ColumnBodyModel }) => {
        return this.entitiesService.columns
          .updateColumn(request.boardId, request.columnId, request.column)
          .pipe(
            map((column: ColumnModel) => updateColumnSuccess({ column })),
            catchError((error) => of(updateColumnFailure({ error }))),
            finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
          );
      }),
    );
  });

  deleteColumn$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteColumn),
      switchMap((request: { boardId: string; column: ExtendedColumnModel; columns: ColumnModel[] }) => {
        return this.entitiesService.columns
          .deleteColumn(request.boardId, request.column, request.columns)
          .pipe(
            map((column) => deleteColumnSuccess({ column: column[0] })),
            catchError((error) => of(deleteColumnFailure({ error }))),
            finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
          );
      }),
    );
  });

  createTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTask),
      switchMap((request: { boardId: string; columnId: string; task: TaskBodyModel }) => {
        return this.entitiesService.tasks.createTask(request.boardId, request.columnId, request.task).pipe(
          map((task: TaskModel) => createTaskSuccess({ task })),
          catchError((error) => of(createTaskFailure({ error }))),
          finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
        );
      }),
    );
  });

  updateTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updateTask),
      switchMap((request: { boardId: string; columnId: string; taskId: string; task: TaskBodyModel }) => {
        return this.entitiesService.tasks
          .updateTask(request.boardId, request.columnId, request.taskId, request.task)
          .pipe(
            map((task: TaskModel) => updateTaskSuccess({ task })),
            catchError((error) => of(updateTaskFailure({ error }))),
            finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
          );
      }),
    );
  });

  deleteTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deleteTask),
      switchMap((request: { boardId: string; column: ExtendedColumnModel; task: TaskModel }) => {
        return this.entitiesService.tasks.deleteTask(request.boardId, request.column, request.task).pipe(
          map((task: TaskModel[]) => deleteTaskSuccess({ task: task[0] })),
          catchError((error) => of(deleteTaskFailure({ error }))),
          finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
        );
      }),
    );
  });

  moveTask$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(moveTask),
      switchMap(
        (request: {
          boardId: string;
          previousColumn: { data: TaskModel[]; id: string };
          nextColumn: { data: TaskModel[]; id: string | null } | undefined;
          previousIndex: number;
          currentIndex: number;
          task: TaskModel;
        }) => {
          return this.entitiesService.tasks
            .moveTask(
              request.boardId,
              request.previousColumn,
              request.nextColumn,
              request.previousIndex,
              request.currentIndex,
              request.task,
            )
            .pipe(
              map((task: TaskModel[]) => moveTaskSuccess({ task: task[0] })),
              catchError((error) => of(moveTaskFailure({ error }))),
              finalize(() => this.store.dispatch(getBoardById({ id: request.boardId }))),
            );
        },
      ),
    );
  });
}
