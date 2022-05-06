import { Component, Input } from "@angular/core";
import { BoardModel } from "@app/shared/models";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-board-preview-card",
  templateUrl: "./board-preview-card.component.html",
  styleUrls: ["./board-preview-card.component.scss"],
})
export class BoardPreviewCardComponent {
  @Input() public data!: BoardModel;

  // eslint-disable-next-line class-methods-use-this
  public openActionsPopup(menu: MatMenuTrigger) {
    menu.openMenu();
  }
}
