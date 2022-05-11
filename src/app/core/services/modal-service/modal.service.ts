import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ErrorModalComponent, ModalComponent } from "@app/shared/components";

@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(deleteEntity: string) {
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: deleteEntity } });
    return dialogRef.afterClosed();
  }

  openErrorModal(status: number, message: string) {
    this.dialog.open(ErrorModalComponent, { minWidth: "250px", data: { status, message } });
  }
}
