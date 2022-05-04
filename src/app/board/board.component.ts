import { Component } from "@angular/core";
import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";

@Component({
  selector: "app-board",
  templateUrl: "./board.component.html",
  styleUrls: ["./board.component.scss"],
})
export class BoardComponent {
  public columns: any[] = [
    {
      type: "To do",
      cards: [
        "Get to work",
        "Pick up groceries",
        "Go home",
        "Fall asleep",
      ],
    },
    {
      type: "Done",
      cards: [
        "Get up",
        "Brush teeth",
        "Take a shower",
        "Check e-mail",
        "Walk dog",
      ],
    },
  ];

  public drop(event: CdkDragDrop<string[]>): void {
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

  public getColumnData(index: number, data: any): any {
    return {
      ...data,
      id: index,
      otherColumns: [...Array(this.columns.length).keys()].filter((item) => item !== index).map((item) => `column-${item}`),
    };
  }
}
