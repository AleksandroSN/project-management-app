import { Component, OnInit } from "@angular/core";
import { NotificationsService } from "@app/core/services";
import { getAllBoards, selectAllBoards } from "@app/redux";
import { BoardModel } from "@app/shared";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-board-page",
  templateUrl: "./board-page.component.html",
  styleUrls: ["./board-page.component.scss"],
})
export class BoardPageComponent implements OnInit {
  boards$!: Observable<BoardModel[] | null>;

  constructor(private store: Store, private notificationsService: NotificationsService) {
    this.boards$ = this.store.select(selectAllBoards);
  }

  ngOnInit(): void {
    const loadNotification = this.notificationsService.showNotification({
      type: "spinner",
      message: "Loading...",
    });
    this.store.dispatch(getAllBoards());
    this.boards$.subscribe((data) => {
      if (data) {
        loadNotification.close();
      }
    });
  }
}
