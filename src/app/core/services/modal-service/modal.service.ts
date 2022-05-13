import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@app/shared/components";

@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(deleteEntity: string) {
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: deleteEntity } });
    return dialogRef.afterClosed();
  }
}
