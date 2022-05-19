import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ExtendedColumnModel, TaskModel } from "@app/shared/models";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-board-column",
  templateUrl: "./board-column.component.html",
  styleUrls: ["./board-column.component.scss"],
})
export class BoardColumnComponent {
  @Input() public columnData!: ExtendedColumnModel;

  @Output() public dropTaskEvent = new EventEmitter<CdkDragDrop<TaskModel[] | undefined, TaskModel[]>>();

  @Output() public deleteColumn = new EventEmitter<ExtendedColumnModel>();

  @Output() public editColumn = new EventEmitter<ExtendedColumnModel>();

  @Output() public createTask = new EventEmitter<ExtendedColumnModel>();

  @Output() public deleteTask = new EventEmitter<{ column: ExtendedColumnModel; task: TaskModel }>();

  @Output() public editTask = new EventEmitter<{ columnId: string; task: TaskModel }>();

  public lockLongPress: boolean = false;

  public dropTask(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>) {
    this.dropTaskEvent.emit(event);
  }

  public deleteTaskFunc(column: ExtendedColumnModel, task: TaskModel): void {
    this.deleteTask.emit({
      column,
      task,
    });
  }

  public editTaskFunc(columnId: string, task: TaskModel): void {
    this.editTask.emit({
      columnId,
      task,
    });
  }

  public openActionsPopup(menu: MatMenuTrigger) {
    if (this.lockLongPress) {
      return;
    }
    menu.openMenu();
  }
}
