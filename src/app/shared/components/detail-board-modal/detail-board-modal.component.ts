import { Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-detail-board-modal",
  templateUrl: "./detail-board-modal.component.html",
  styleUrls: ["./detail-board-modal.component.scss"],
})
export class DetailBoardModalComponent {
  public form: FormGroup;

  public fields: { field: string; name: string }[] = [];

  constructor(
    private dialogRef: MatDialogRef<DetailBoardModalComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: { formGroup: { [key: string]: any }; title: string },
  ) {
    this.fields = Object.entries(data.formGroup).map(([key, value]: [string, any[]]) => ({
      field: key,
      name: value[value.length - 1],
    }));
    // eslint-disable-next-line max-len
    this.form = formBuilder.group(
      Object.fromEntries(
        Object.entries(data.formGroup).map(([key, value]: [string, any[]]) => {
          value.pop();
          return [key, value];
        }),
      ),
    );
  }

  public close(): void {
    this.dialogRef.close();
  }
}
