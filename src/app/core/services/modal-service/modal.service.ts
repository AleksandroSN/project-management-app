import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { BoardBodyModel } from "@app/shared";
import { ModalComponent, NewBoardModalComponent } from "@app/shared/components";
import { Observable } from "rxjs";

@Injectable()
export class ModalService {
  constructor(private dialog: MatDialog) {}

  openModal(deleteEntity: string) {
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: deleteEntity } });
    return dialogRef.afterClosed();
  }

  openNewBoardModal(data: BoardBodyModel): Observable<BoardBodyModel> {
    const dialogRef = this.dialog.open(NewBoardModalComponent, { data });
    return dialogRef.afterClosed();
  }
}
