import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BoardBodyModel } from "@app/shared/models";

@Component({
  selector: "app-new-board-modal",
  templateUrl: "./new-board-modal.component.html",
  styleUrls: ["./new-board-modal.component.scss"],
})
export class NewBoardModalComponent {
  constructor(
    public dialogRef: MatDialogRef<NewBoardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BoardBodyModel,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
