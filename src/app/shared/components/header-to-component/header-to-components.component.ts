import { Component, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-header-to-component",
  templateUrl: "./header-to-components.component.html",
  styleUrls: ["./header-to-components.component.scss"],
})
export class HeaderToComponent {
  @Input() public title!: string;

  public boardPath: boolean = false;

  constructor(public route: ActivatedRoute, public router: Router) {
    this.boardPath = window.location.href.includes("/board/");
  }

  public back(): void {
    this.router.navigateByUrl("/board");
  }
}
