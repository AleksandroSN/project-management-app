import { Component, Inject, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { BoardBodyModel, BoardModalFormControls } from "@app/shared/models";

@Component({
  selector: "app-board-modal",
  templateUrl: "./board-modal.component.html",
  styleUrls: ["./board-modal.component.scss"],
})
export class BoardModalComponent implements OnInit {
  form!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<BoardModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { board: BoardBodyModel; create: boolean },
    private fb: FormBuilder,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ["", [Validators.required, Validators.minLength(5)]],
      description: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  get controls(): BoardModalFormControls {
    return this.form.controls as BoardModalFormControls;
  }
}
