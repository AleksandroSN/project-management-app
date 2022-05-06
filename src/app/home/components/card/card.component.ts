import { Component, Input } from "@angular/core";
import { BoardModel } from "@app/shared/models";
import { MatMenuTrigger } from "@angular/material/menu";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
})
export class CardComponent {
  @Input() public data!: BoardModel;

  // eslint-disable-next-line class-methods-use-this
  public openActionsPopup(menu: MatMenuTrigger) {
    menu.openMenu();
  }
}
