import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { ColumnModel, TaskModel } from "@app/shared/models";
import { NotificationsService } from "@app/core/services/notifications-service/notifications.service";

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

  constructor(
    private notificationsService: NotificationsService,
  ) {}

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
    const notification = this.notificationsService.showNotification({
      type: "spinner",
      message: "Синхронизация",
    });
    setTimeout(() => {
      notification.close();
      this.notificationsService.showNotification({
        type: "message",
        message: "Синхронизация завершена",
      });
    }, 5000);
  }

  public dropColumn(event: CdkDragDrop<ColumnModel[] | undefined>) {
    moveItemInArray(this.columns, event.previousIndex, event.currentIndex);
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
