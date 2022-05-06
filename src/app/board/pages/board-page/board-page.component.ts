import { Component } from "@angular/core";
import { BoardModel } from "@app/shared";

@Component({
  selector: "app-board-page",
  templateUrl: "./board-page.component.html",
  styleUrls: ["./board-page.component.scss"],
})
export class BoardPageComponent {
  public boards: BoardModel[] = [
    {
      id: "0",
      title: "RS Project",
    },
    {
      id: "1",
      title: "Test Project",
    },
  ];
}
