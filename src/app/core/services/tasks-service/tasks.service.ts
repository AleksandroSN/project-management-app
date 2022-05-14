import { Injectable } from "@angular/core";
import { HttpService } from "@app/core/services";
import { Observable } from "rxjs";
import { TaskBodyModel, TaskModel } from "@app/shared";
import { BOARS_ENDPOINT, COLUMNS_ENDPOINT, TASKS_ENDPOINT } from "@utils";

@Injectable({
  providedIn: "root",
})
export class TasksService {
  constructor(private httpService: HttpService) {}

  public getAllTasks(boardId: string, columnId: string): Observable<TaskModel[]> {
    return this.httpService.getAll<TaskModel>(
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}`,
    );
  }

  public getTaskById(boardId: string, columnId: string, taskId: string): Observable<TaskModel> {
    return this.httpService.get<TaskModel>(
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}/${taskId}`,
    );
  }

  public createTask(boardId: string, columnId: string, task: TaskBodyModel): Observable<TaskModel> {
    return this.httpService.post<TaskBodyModel, TaskModel>(
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}`,
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
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}/${taskId}`,
      task,
    );
  }

  public deleteTask(boardId: string, columnId: string, taskId: string): Observable<TaskModel> {
    return this.httpService.delete<TaskModel>(
      `${BOARS_ENDPOINT}/${boardId}/${COLUMNS_ENDPOINT}/${columnId}/${TASKS_ENDPOINT}/${taskId}`,
    );
  }
}
