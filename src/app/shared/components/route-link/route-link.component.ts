import { Component, Input } from "@angular/core";

@Component({
  selector: "app-route-link",
  templateUrl: "./route-link.component.html",
  styleUrls: ["./route-link.component.scss"],
})
export class RouteLinkComponent {
  @Input() linkText = "";

  @Input() linkPath = "";
}
