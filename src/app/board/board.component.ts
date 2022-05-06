import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { ColumnModel } from "@app/shared/models/column.model";
import { TaskModel } from "@app/shared/models/task.model";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  public columns: ColumnModel[] = [
    {
      id: "0",
      title: "To do",
      order: 1,
      tasks: [
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
  ];

  public drop(event: CdkDragDrop<TaskModel[] | undefined, TaskModel[]>): void {
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
