import { Component, Input } from "@angular/core";
import { TaskModel } from "@app/shared/models/task.model";

@Component({
  selector: "app-board-card",
  templateUrl: "./board-card.component.html",
  styleUrls: ["./board-card.component.scss"],
})
export class BoardCardComponent {
  @Input() public taskData!: TaskModel;
}
