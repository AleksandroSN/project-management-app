import { Component } from "@angular/core";
import { ModalService, NotificationsService } from "@app/core/services";
import { BoardsService } from "@app/core/services/boards-service/boards.service";
import { switchMap } from "rxjs";

@Component({
  selector: "app-create-board-button",
  templateUrl: "./create-board-button.component.html",
  styleUrls: ["./create-board-button.component.scss"],
})
export class CreateBoardButtonComponent {
  title = "";

  description = "";

  constructor(
    private modalService: ModalService,
    private boardService: BoardsService,
    private notificationServise: NotificationsService,
  ) {}

  createBoard() {
    this.modalService
      .openBoardModal({ title: this.title, description: this.description }, true)
      .pipe(switchMap((data) => this.boardService.createBoard(data)))
      .subscribe(() => {
        this.notificationServise.showNotification({
          type: "success",
          message: "Board created",
        });
      });
  }
}
