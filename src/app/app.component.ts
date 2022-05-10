import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectIsLoadData } from "@app/redux";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  isLoaderActive$: Observable<boolean>;

  constructor(private store: Store) {
    this.isLoaderActive$ = this.store.select(selectIsLoadData);
  }
}
