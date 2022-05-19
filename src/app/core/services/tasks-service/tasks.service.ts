import { Injectable } from "@angular/core";
import { HttpService } from "@app/core/services";
import { Observable } from "rxjs";
import { ExtendedColumnModel, TaskBodyModel, TaskModel } from "@app/shared";
import { BOARDS_ENDPOINT, COLUMNS_ENDPOINT, TASKS_ENDPOINT } from "@utils";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private httpService: HttpService) {}

  public getAllTasks(boardId: string, columnId: string): Observable<TaskModel[]> {
    return this.httpService.getAll<TaskModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}`,
    );
  }

  public getTaskById(boardId: string, columnId: string, taskId: string): Observable<TaskModel> {
    return this.httpService.get<TaskModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}/${taskId}`,
    );
  }

  public createTask(boardId: string, columnId: string, task: TaskBodyModel): Observable<TaskModel> {
    return this.httpService.post<TaskBodyModel, TaskModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}`,
      task,
    );
  }

  public updateTask(
    boardId: string,
    columnId: string,
    taskId: string,
    task: TaskBodyModel,
  ): Observable<TaskModel> {
    return this.httpService.update<TaskBodyModel, TaskModel>(
      `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}/${taskId}`,
      task,
    );
  }

  /* eslint-disable */
  public deleteTask(boardId: string, column: ExtendedColumnModel, task: TaskModel): Observable<TaskModel[]> {
    return this.httpService.chain<TaskModel[]>([
      this.httpService.delete<TaskModel>(
        `${BOARDS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${column.id}/${TASKS_ENDPOINT}/${task.id}`,
      ),
      ...(column.tasks || [])
        .filter((filterTask: TaskModel) => filterTask.order > task.order)
        .map((mapTask: TaskModel) =>
          this.updateTask(boardId, column.id, mapTask.id, {
          title: mapTask.title,
          description: mapTask.description,
          order: mapTask.order - 1,
          done: mapTask.done,
          userId: mapTask.userId,
          boardId,
          columnId: column.id,
        }),
        ),
    ]);
  }

  public moveTask(
    boardId: string,
    previousColumn: { data: TaskModel[]; id: string },
    nextColumn: { data: TaskModel[]; id: string | null } | undefined,
    previousIndex: number,
    currentIndex: number,
    task: TaskModel,
  ): Observable<TaskModel[]> {
    const oneColumn = (): Observable<TaskModel[]> => {
      const minOrder = previousIndex < currentIndex ? previousIndex : currentIndex - 1;
      const maxOrder = previousIndex > currentIndex ? previousIndex : currentIndex + 1;
      const between = (): Observable<TaskModel>[] => {
        const filtered = previousColumn.data.filter(
          (filterTask: TaskModel) => filterTask.order > minOrder + 1 && filterTask.order < maxOrder + 1,
        );
        if (currentIndex < previousIndex) {
          filtered.reverse();
        }
        // eslint-disable-next-line arrow-body-style
        return filtered.map((mapTask: TaskModel) => {
          return this.updateTask(boardId, previousColumn.id, task.id, {
            title: mapTask.title,
            description: mapTask.description,
            order: mapTask.order - 1,
            done: mapTask.done,
            userId: mapTask.userId,
            boardId,
            columnId: previousColumn.id,
          });
        });
      };
      return this.httpService.chain<TaskModel[]>([
        this.updateTask(
          boardId,
          previousColumn.id,
          task.id,
          {
            title: task.title,
            description: task.description,
            order: previousColumn.data.length + 1,
            done: task.done,
            userId: task.userId,
            boardId,
            columnId: previousColumn.id,
          }
        ),
        ...between(),
        this.updateTask(
          boardId,
          previousColumn.id,
          task.id,
          {
            title: task.title,
            description: task.description,
            order: currentIndex + 1,
            done: task.done,
            userId: task.userId,
            boardId,
            columnId: previousColumn.id,
          }
        ),
      ]);
    }
    const twoColumns = (nextColumn: { data: TaskModel[], id: string }): Observable<TaskModel[]> => {
      return this.httpService.chain<TaskModel[]>([
        ...nextColumn.data
          .filter((filterTask: TaskModel) => filterTask.order >= currentIndex + 1 && filterTask.id !== task.id)
          .reverse()
          .map((mapTask: TaskModel) =>
            this.updateTask(
              boardId,
              nextColumn.id,
              mapTask.id,
              {
                title: mapTask.title,
                description: mapTask.description,
                order: mapTask.order + 1,
                done: mapTask.done,
                userId: mapTask.userId,
                boardId,
                columnId: nextColumn.id,
              }
            ),
          ),
        this.updateTask(
          boardId,
          previousColumn.id,
          task.id,
          {
            title: task.title,
            description: task.description,
            order: currentIndex + 1,
            done: task.done,
            userId: task.userId,
            boardId,
            columnId: nextColumn.id,
          }
        ),
      ...previousColumn.data
        .filter((filterTask: TaskModel) => filterTask.order > previousIndex + 1 && filterTask.id !== task.id)
        .map((mapTask: TaskModel) =>
          this.updateTask(
            boardId,
            previousColumn.id,
            mapTask.id,
            {
              title: mapTask.title,
              description: mapTask.description,
              order: mapTask.order - 1,
              done: mapTask.done,
              userId: mapTask.userId,
              boardId,
              columnId: previousColumn.id,
            }
          ),
        ),
      ]);
    };
    if (nextColumn && previousColumn.id === nextColumn.id) {
      return oneColumn();
    } else if (nextColumn?.id && nextColumn?.data) {
      const nextColumnObject = {
        data: nextColumn.data,
        id: nextColumn.id,
      }
      return twoColumns(nextColumnObject);
    }
    return oneColumn();
  }
}
