import { Component, OnDestroy, OnInit } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { ColumnModel, ExtendedColumnModel, TaskModel } from "@app/shared/models";
import { Store } from "@ngrx/store";
import { destroyCurrentBoard, getBoardById } from "@app/redux/actions/current-board.action";
import { ActivatedRoute } from "@angular/router";
import { DetailBoardService } from "@app/board/detail-board-page/detail-board.service";

@Component({
  selector: "app-detail-board-page",
  templateUrl: "./detail-board-page.component.html",
  styleUrls: ["./detail-board-page.component.scss"],
})
export class DetailBoardPageComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store,
    private route: ActivatedRoute,
    public detailBoardService: DetailBoardService,
  ) {}

  public ngOnInit(): void {
    this.store.dispatch(getBoardById({ id: this.route.snapshot.params["id"] }));
  }

  public createColumn(): void {
    // eslint-disable-next-line max-len
    this.detailBoardService.createColumn(
      this.route.snapshot.params["id"],
      this.detailBoardService.board?.columns?.length || 0,
    );
  }

  public deleteColumn(column: ExtendedColumnModel): void {
    if (this.detailBoardService.board) {
      this.detailBoardService.deleteColumn(this.detailBoardService.board?.id, column);
    }
  }

  public updateColumn(column: ExtendedColumnModel): void {
    this.detailBoardService.updateColumn(this.route.snapshot.params["id"], column);
  }

  public ngOnDestroy(): void {
    // @ts-ignore
    this.store.dispatch(destroyCurrentBoard());
  }

  // eslint-disable-next-line class-methods-use-this
  public dropTask(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>): void {
    const prevColId = event.previousContainer.element.nativeElement.getAttribute("data-id");
    const nextColId = event.container.element.nativeElement.getAttribute("data-id");
    if (!event.container?.data) {
      return;
    }
    if (prevColId === nextColId && event.previousIndex === event.currentIndex) {
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
    if (prevColId) {
      this.detailBoardService.moveTask(
        {
          data: event.previousContainer.data,
          id: prevColId,
        },
        {
          data: event.container.data,
          id: nextColId,
        },
        event.previousIndex,
        event.currentIndex,
        event.container.data[event.currentIndex],
      );
    }
  }

  public dropColumn(event: CdkDragDrop<ColumnModel[] | undefined>) {
    if (!this.detailBoardService.board?.columns) {
      return;
    }
    moveItemInArray(this.detailBoardService.board.columns, event.previousIndex, event.currentIndex);
    if (event.previousIndex === event.currentIndex) {
      return;
    }
    this.detailBoardService.moveColumn(
      this.detailBoardService.board.columns[event.currentIndex],
      event.previousIndex,
      event.currentIndex,
    );
  }

  public createTask(column: ExtendedColumnModel): void {
    this.detailBoardService.createTask(column);
  }

  public deleteTask(data: { column: ExtendedColumnModel; task: TaskModel }): void {
    this.detailBoardService.deleteTask(data.column, data.task);
  }

  public editTask(data: { columnId: string; task: TaskModel }): void {
    this.detailBoardService.updateTask(data.columnId, data.task);
  }

  public getColumnData(index: number, data: ColumnModel): any {
    return {
      ...data,
      indexId: index,
      otherColumns: [...Array((this.detailBoardService.board?.columns || []).length).keys()]
        .filter((item) => item !== index)
        .map((item) => `column-${item}`),
    };
  }
}
