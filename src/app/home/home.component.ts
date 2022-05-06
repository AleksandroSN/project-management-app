import { Component } from "@angular/core";
import { BoardModel } from "@app/shared/models/board.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
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
