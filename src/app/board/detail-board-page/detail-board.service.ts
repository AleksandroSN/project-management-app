import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { createColumn } from "@app/redux";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Validators } from "@angular/forms";
// eslint-disable-next-line max-len
import { DetailBoardModalComponent } from "@app/shared/components/detail-board-modal/detail-board-modal.component";

@Injectable({
  providedIn: "root",
})
export class DetailBoardService {
  constructor(
    private store: Store,
    private dialog: MatDialog,
  ) {}

  public createColumn(boardId: string, boardLength: number): void {
    this.openModal<{ title: string }>(
      {
        title: ["", Validators.required, "Column title"],
      },
      "Create column",
    ).afterClosed().subscribe((res: { title: string } | undefined) => {
      if (res) {
        this.store.dispatch(createColumn({ boardId, column: { ...res, order: boardLength + 1 } }));
      }
    });
  }

  // eslint-disable-next-line max-len
  public openModal<T>(formGroup: { [key:string]: any }, title: string): MatDialogRef<DetailBoardModalComponent, T> {
    return this.dialog.open(DetailBoardModalComponent, { data: { formGroup, title } });
  }
}
