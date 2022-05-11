import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { ColumnModel, LoadingStatus, TaskModel } from "@app/shared/models";
import { NotificationsService } from "@app/core/services/notifications-service/notifications.service";
import { Store } from "@ngrx/store";
import { AppState } from "@app/redux";
import { getBoardById } from "@app/redux/actions/current-board.action";
import { selectCurrentBoardStatus } from "@app/redux/selectors/current-board.selectors";
import { Observable } from "rxjs";
import { NotificationRef } from "@app/shared/models/notification.model";

@Component({
  selector: "app-detail-board-page",
  templateUrl: "./detail-board-page.component.html",
  styleUrls: ["./detail-board-page.component.scss"],
})
export class DetailBoardPageComponent {
  public columns: ColumnModel[] = [
    {
      id: "0",
      title: "To do",
      order: 1,
      tasks: [
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the catвфрвофшдвошфовщфоцшовшдфоцвдшофцдшвоцшфдовдшфодцшвофд",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
        {
          id: "6e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: pet the cat",
          order: 1,
          done: false,
          description: "Domestic cat needs to be stroked gently",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
      ],
    },
    {
      id: "1",
      title: "Done",
      order: 2,
      tasks: [
        {
          id: "ada26e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: get up",
          order: 1,
          done: false,
          description: "Test",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
      ],
    },
    {
      id: "1",
      title: "Done",
      order: 2,
      tasks: [
        {
          id: "ada26e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: get up",
          order: 1,
          done: false,
          description: "Test",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
      ],
    },
    {
      id: "1",
      title: "Done",
      order: 2,
      tasks: [
        {
          id: "ada26e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: get up",
          order: 1,
          done: false,
          description: "Test",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
      ],
    },
    {
      id: "1",
      title: "Done",
      order: 2,
      tasks: [
        {
          id: "ada26e3abe9c-ceb1-40fa-9a04-eb2b2184daf9",
          title: "Task: get up",
          order: 1,
          done: false,
          description: "Test",
          userId: "b2d92061-7d23-4641-af52-dd39f95b99f8",
        },
      ],
    },
  ];

  public status$: Observable<LoadingStatus | null> = this.store.select(selectCurrentBoardStatus);

  public loadingNotification!: NotificationRef | null;

  constructor(private notificationsService: NotificationsService, private store: Store<AppState>) {
    this.status$.subscribe((res) => {
      if (res === LoadingStatus.LOADING) {
        if (!this.loadingNotification) {
          this.loadingNotification = notificationsService.showNotification({
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
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
    this.store.dispatch(getBoardById({ id: "9a111e19-24ec-43e1-b8c4-13776842b8d5" }));
  }

  public getColumnData(index: number, data: ColumnModel): any {
    return {
      ...data,
      id: index,
      otherColumns: [...Array(this.columns.length).keys()]
        .filter((item) => item !== index)
        .map((item) => `column-${item}`),
    };
  }
}
