import { Component, OnInit } from "@angular/core";
import { SidenavService } from "./core/services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  isOpen = false;

  constructor(private sidenavServise: SidenavService) {}

  close() {
    this.sidenavServise.close();
  }

  ngOnInit(): void {
    this.sidenavServise.isOpen$.subscribe((open) => {
      this.isOpen = open;
    });
  }
}
