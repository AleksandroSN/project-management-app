import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BoardBodyModel } from "@app/shared/models";

@Component({
  selector: "app-board-modal",
  templateUrl: "./board-modal.component.html",
  styleUrls: ["./board-modal.component.scss"],
})
export class BoardModalComponent {
  constructor(
    public dialogRef: MatDialogRef<BoardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { board: BoardBodyModel; create: boolean },
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
