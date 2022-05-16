import { Component, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { BoardModel, ColumnModel, LoadingStatus, TaskModel } from "@app/shared/models";
import { NotificationsService } from "@app/core/services/notifications-service/notifications.service";
import { Store } from "@ngrx/store";
import { getBoardById } from "@app/redux/actions/current-board.action";
import { selectCurrentBoard, selectCurrentBoardStatus } from "@app/redux/selectors/current-board.selectors";
import { Observable } from "rxjs";
import { NotificationRef } from "@app/shared/models/notification.model";

@Component({
  selector: "app-detail-board-page",
  templateUrl: "./detail-board-page.component.html",
  styleUrls: ["./detail-board-page.component.scss"],
})
export class DetailBoardPageComponent implements OnInit {
  public status$: Observable<LoadingStatus | null> = this.store.select(selectCurrentBoardStatus);

  public board$: Observable<BoardModel | undefined> = this.store.select(selectCurrentBoard);

  public board: BoardModel | undefined;

  public loadingNotification!: NotificationRef | null;

  constructor(private notificationsService: NotificationsService, private store: Store) {}

  public ngOnInit(): void {
    this.status$.subscribe((res) => {
      if (res === LoadingStatus.LOADING) {
        if (!this.loadingNotification) {
          this.loadingNotification = this.notificationsService.showNotification({
            type: "spinner",
            message: "Board synchronization",
          });
        }
      } else if (this.loadingNotification) {
        this.loadingNotification.close();
        this.loadingNotification = null;
      }
    });
    this.store.dispatch(getBoardById({ id: "9a111e19-24ec-43e1-b8c4-13776842b8d5" }));
    this.board$.subscribe((board) => {
      this.board = board;
    });
  }

  // eslint-disable-next-line class-methods-use-this
  public dropTask(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>): void {
    if (!event.container?.data) {
      return;
    }
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    this.store.dispatch(getBoardById({ id: "9a111e19-24ec-43e1-b8c4-13776842b8d5" }));
  }

  public dropColumn(event: CdkDragDrop<ColumnModel[] | undefined>) {
    if (!this.board?.columns) {
      return;
    }
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
    this.store.dispatch(getBoardById({ id: "9a111e19-24ec-43e1-b8c4-13776842b8d5" }));
  }

  public getColumnData(index: number, data: ColumnModel): any {
    return {
      ...data,
      id: index,
      otherColumns: [...Array((this.board?.columns || []).length).keys()]
        .filter((item) => item !== index)
        .map((item) => `column-${item}`),
    };
  }
}
