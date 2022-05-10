import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ExtendedColumnModel, TaskModel } from "@app/shared/models";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-board-column",
  templateUrl: "./board-column.component.html",
  styleUrls: ["./board-column.component.scss"],
})
export class BoardColumnComponent {
  @Input() public columnData!: ExtendedColumnModel;

  @Output() public dropTaskEvent = new EventEmitter<
  CdkDragDrop<TaskModel[] | undefined, TaskModel[]>
  >();

  public dropTask(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>) {
    this.dropTaskEvent.emit(event);
  }
}
