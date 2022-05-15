import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { ColumnBodyModel } from "@app/shared";
import { createColumn } from "@app/redux";

@Injectable({
  providedIn: "root",
})
export class DetailBoardService {
  constructor(
    private store: Store,
  ) {}

  public createColumn(boardId: string, column: ColumnBodyModel): void {
    this.store.dispatch(createColumn({ boardId, column }));
  }
}
