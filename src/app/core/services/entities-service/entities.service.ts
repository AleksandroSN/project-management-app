import { Injectable } from "@angular/core";
import { ColumnsService } from "@app/core/services/columns-service/columns.service";
import { BoardsService } from "@app/core/services/boards-service/boards.service";
import { TasksService } from "@app/core/services/tasks-service/tasks.service";
import { UserService } from "@app/core/services";

@Injectable({
  providedIn: "root",
})
export class EntitiesService {
  constructor(
    public boards: BoardsService,
    public columns: ColumnsService,
    public tasks: TasksService,
    public users: UserService,
  ) {}
}
