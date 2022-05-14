import { Component, OnInit } from "@angular/core";
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

  constructor(private store: Store) {
    this.boards$ = this.store.select(selectAllBoards);
  }

  ngOnInit(): void {
    this.store.dispatch(getAllBoards());
  }
}
