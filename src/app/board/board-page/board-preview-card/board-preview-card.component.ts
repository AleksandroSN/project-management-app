import { Component, Input } from "@angular/core";
import { BoardModel } from "@app/shared/models";
import { MatMenuTrigger } from "@angular/material/menu";
import { BoardsService, ModalService, NotificationsService } from "@app/core/services";
import { switchMap } from "rxjs";
import { Store } from "@ngrx/store";
import { getAllBoards } from "@app/redux";

@Component({
  selector: "app-board-preview-card",
  templateUrl: "./board-preview-card.component.html",
  styleUrls: ["./board-preview-card.component.scss"],
})
export class BoardPreviewCardComponent {
  @Input() public data!: BoardModel;

  constructor(
    private boardService: BoardsService,
    private notificationsService: NotificationsService,
    private modalService: ModalService,
    private store: Store,
  ) {}

  // eslint-disable-next-line class-methods-use-this
  public openActionsPopup(menu: MatMenuTrigger) {
    menu.openMenu();
  }

  deleteBoard() {
    this.boardService.deleteBoard(this.data.id).subscribe(() => {
      this.store.dispatch(getAllBoards());
      this.notificationsService.showNotification({
        type: "success",
        message: "Board deleted",
      });
    });
  }

  editBoard() {
    this.modalService
      .openBoardModal({ title: this.data.title, description: this.data.description }, false)
      .pipe(switchMap((data) => this.boardService.updateBoard(this.data.id, data.board)))
      .subscribe(() => {
        this.store.dispatch(getAllBoards());
        this.notificationsService.showNotification({
          type: "success",
          message: "Board updated",
        });
      });
  }
}
