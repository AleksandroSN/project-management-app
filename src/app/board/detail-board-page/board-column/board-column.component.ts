import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ExtendedColumnModel, TaskModel } from "@app/shared/models";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
import { ModalComponent } from "@app/shared/components/modal/modal.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-board-column",
  templateUrl: "./board-column.component.html",
  styleUrls: ["./board-column.component.scss"],
})
export class BoardColumnComponent {
  @Input() public columnData!: ExtendedColumnModel;

  // eslint-disable-next-line max-len
  @Output() public dropTaskEvent = new EventEmitter<CdkDragDrop<TaskModel[] | undefined, TaskModel[]>>();

  constructor(public dialog: MatDialog) {}

  public dropTask(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>) {
    this.dropTaskEvent.emit(event);
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: "column" } });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
