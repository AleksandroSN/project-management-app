import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  createColumn,
  deleteColumn,
  selectCurrentBoard,
  selectCurrentBoardStatus,
  setPendingState,
  updateColumn,
} from "@app/redux";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Validators } from "@angular/forms";
// eslint-disable-next-line max-len
import { DetailBoardModalComponent } from "@app/shared/components/detail-board-modal/detail-board-modal.component";
import { BoardModel, ColumnModel, LoadingStatus, NotificationRef, StatusModel } from "@app/shared";
import { Observable, takeUntil } from "rxjs";
import { Router } from "@angular/router";
import { NotificationsService } from "@app/core/services";

@Injectable({
  providedIn: "root",
})
export class DetailBoardService {

  public loadingNotification!: NotificationRef | null;

  public status$: Observable<StatusModel> = this.store.select(selectCurrentBoardStatus);

  public board$: Observable<BoardModel | undefined> = this.store.select(selectCurrentBoard);

  public board: BoardModel | undefined;

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private router: Router,
    private notificationsService: NotificationsService,
  ) {
    this.status$.subscribe((res) => {
      if ([LoadingStatus.LOADING, LoadingStatus.PRE_SUCCESS].includes(res.type)) {
        if (!this.loadingNotification) {
          this.loadingNotification = this.notificationsService.showNotification({
            type: "spinner",
            message: "Board synchronization",
          });
        }
      } else if (res.type === LoadingStatus.ERROR) {
        if (this.loadingNotification) {
          this.loadingNotification.close();
          this.loadingNotification = null;
        }
        if (res.code === 404) {
          const errorNotification = this.notificationsService.showNotification({
            type: "error",
            message: res.info || "Unknown error",
            submit: true,
          });
          errorNotification.afterClose.subscribe(() => {
            this.router.navigateByUrl("/board");
          });
        } else {
          this.notificationsService.showNotification({
            type: "error",
            message: res.info || "Unknown error",
            duration: 5000,
          });
        }
        this.store.dispatch(setPendingState());
      } else if (this.loadingNotification) {
        this.loadingNotification.close();
        this.loadingNotification = null;
        this.store.dispatch(setPendingState());
      }
    });
    this.board$.subscribe((board) => {
      this.board = board;
    });
  }

  public createColumn(boardId: string, boardLength: number): void {
    this.openModal<{ title: string }>(
      {
        title: ["", Validators.required, "Column title"],
      },
      "Create column",
    )
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.store.dispatch(createColumn({ boardId, column: { ...res, order: boardLength + 1 } }));
        }
      });
  }

  public deleteColumn(boardId: string, columnId: string): void {
    if (!this.board?.columns) {
      return;
    }
    this.store.dispatch(deleteColumn({ boardId, columnId, columns: this.board.columns }));
  }

  public updateColumn(boardId: string, column: ColumnModel): void {
    this.openModal<{ title: string }>(
      {
        title: [column.title, Validators.required, "Column title"],
      },
      "Update column",
    )
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          // eslint-disable-next-line max-len
          this.store.dispatch(
            updateColumn({ boardId, columnId: column.id, column: { ...res, order: column.order } }),
          );
        }
      });
  }

  // eslint-disable-next-line max-len
  public openModal<T>(
    formGroup: { [key: string]: any },
    title: string,
  ): MatDialogRef<DetailBoardModalComponent, T> {
    return this.dialog.open(DetailBoardModalComponent, { data: { formGroup, title } });
  }
}
