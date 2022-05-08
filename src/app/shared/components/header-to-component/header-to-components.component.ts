import { Component, Input } from "@angular/core";

@Component({
  selector: "app-header-to-component",
  templateUrl: "./header-to-components.component.html",
  styleUrls: ["./header-to-components.component.scss"],
})
export class HeaderToComponent {
  @Input() public title!: string;
}
