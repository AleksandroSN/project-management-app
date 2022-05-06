import {
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";
import { ExtendedColumnModel } from "@app/shared/models/column.model";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { TaskModel } from "@app/shared/models/task.model";

@Component({
  selector: "app-board-column",
  templateUrl: "./board-column.component.html",
  styleUrls: ["./board-column.component.scss"],
})
export class BoardColumnComponent {
  @Input() public columnData!: ExtendedColumnModel;

  @Output() public dropEvent = new EventEmitter<
  CdkDragDrop<TaskModel[] | undefined, TaskModel[]>
  >();

  public drop(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>) {
    this.dropEvent.emit(event);
  }
}
