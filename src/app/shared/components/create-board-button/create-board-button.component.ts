import { Component } from "@angular/core";
import { ModalService, NotificationsService } from "@app/core/services";
import { BoardsService } from "@app/core/services/boards-service/boards.service";
import { getAllBoards } from "@app/redux";
import { Store } from "@ngrx/store";
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
    private store: Store,
  ) {}

  createBoard() {
    this.modalService
      .openBoardModal({ title: this.title, description: this.description }, true)
      .pipe(switchMap((data) => this.boardService.createBoard(data.board)))
      .subscribe(() => {
        this.store.dispatch(getAllBoards());
        this.notificationServise.showNotification({
          type: "success",
          message: "Board created",
        });
      });
  }
}
