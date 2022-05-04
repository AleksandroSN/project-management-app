import {
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core";

@Component({
  selector: "app-board-column",
  templateUrl: "./board-column.component.html",
  styleUrls: ["./board-column.component.scss"],
})
export class BoardColumnComponent {
  @Input() public columnData: any;

  @Output() public dropEvent = new EventEmitter<any>();

  public drop(event: any) {
    this.dropEvent.emit(event);
  }
}
