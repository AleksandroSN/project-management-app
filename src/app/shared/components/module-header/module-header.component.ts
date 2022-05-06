import { Component, Input } from "@angular/core";

@Component({
  selector: "app-module-header",
  templateUrl: "./module-header.component.html",
  styleUrls: ["./module-header.component.scss"],
})
export class ModuleHeaderComponent {
  @Input() public title!: string;
}
