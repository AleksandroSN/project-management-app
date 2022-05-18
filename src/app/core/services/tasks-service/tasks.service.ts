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
  /* eslint-enable */
}
