import { Component, OnDestroy, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { BoardModel, ColumnModel, LoadingStatus, StatusModel, TaskModel } from "@app/shared/models";
import { NotificationsService } from "@app/core/services/notifications-service/notifications.service";
import { Store } from "@ngrx/store";
import {
  destroyCurrentBoard,
  getBoardById,
  setPendingState,
} from "@app/redux/actions/current-board.action";
import { selectCurrentBoard, selectCurrentBoardStatus } from "@app/redux/selectors/current-board.selectors";
import { Observable, Subject, takeUntil } from "rxjs";
import { NotificationRef } from "@app/shared/models/notification.model";
import { ActivatedRoute, Router } from "@angular/router";
import { DetailBoardService } from "@app/board/detail-board-page/detail-board.service";

@Component({
  selector: "app-detail-board-page",
  templateUrl: "./detail-board-page.component.html",
  styleUrls: ["./detail-board-page.component.scss"],
})
export class DetailBoardPageComponent implements OnInit, OnDestroy {
  // eslint-disable-next-line max-len
  public status$: Observable<StatusModel> = this.store.select(selectCurrentBoardStatus);

  public board$: Observable<BoardModel | undefined> = this.store.select(selectCurrentBoard);

  public destroyed = new Subject<any>();

  public board: BoardModel | undefined;

  public loadingNotification!: NotificationRef | null;

  constructor(
    private notificationsService: NotificationsService,
    private store: Store,
    private router: Router,
    private route: ActivatedRoute,
    private detailBoardService: DetailBoardService,
  ) {}

  public ngOnInit(): void {
    this.status$.pipe(takeUntil(this.destroyed)).subscribe((res) => {
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
    this.board$.pipe(takeUntil(this.destroyed)).subscribe((board) => {
      this.board = board;
    });
    this.store.dispatch(getBoardById({ id: this.route.snapshot.params["id"] }));
  }

  public createColumn(): void {
    this.detailBoardService.createColumn(this.route.snapshot.params["id"], this.board?.columns?.length || 0);
  }

  public ngOnDestroy(): void {
    // @ts-ignore
    this.destroyed.next();
    this.destroyed.complete();
    this.store.dispatch(destroyCurrentBoard());
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
    this.store.dispatch(getBoardById({ id: this.route.snapshot.params["id"] }));
  }

  public dropColumn(event: CdkDragDrop<ColumnModel[] | undefined>) {
    if (!this.board?.columns) {
      return;
    }
    moveItemInArray(this.board.columns, event.previousIndex, event.currentIndex);
    this.store.dispatch(getBoardById({ id: this.route.snapshot.params["id"] }));
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
