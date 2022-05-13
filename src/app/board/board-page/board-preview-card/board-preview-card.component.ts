import { Component, Input } from "@angular/core";
import { BoardModel } from "@app/shared/models";
import { MatMenuTrigger } from "@angular/material/menu";
import { BoardsService, ModalService, NotificationsService } from "@app/core/services";
import { switchMap } from "rxjs";

@Component({
  selector: "app-board-preview-card",
  templateUrl: "./board-preview-card.component.html",
  styleUrls: ["./board-preview-card.component.scss"],
})
export class BoardPreviewCardComponent {
  @Input() public data!: BoardModel;

  title = "";

  description = "";

  constructor(
    private boardService: BoardsService,
    private notificationsService: NotificationsService,
    private modalService: ModalService,
  ) {}

  // eslint-disable-next-line class-methods-use-this
  public openActionsPopup(menu: MatMenuTrigger) {
    menu.openMenu();
  }

  deleteBoard() {
    this.boardService.deleteBoard(this.data.id).subscribe(() => {
      this.notificationsService.showNotification({
        type: "success",
        message: "Board deleted",
      });
    });
  }

  editBoard() {
    this.modalService
      .openBoardModal({ title: this.title, description: this.description }, false)
      .pipe(switchMap((updatedBoard) => this.boardService.updateBoard(this.data.id, updatedBoard)))
      .subscribe(() => {
        this.notificationsService.showNotification({
          type: "success",
          message: "Board updated",
        });
      });
  }
}
