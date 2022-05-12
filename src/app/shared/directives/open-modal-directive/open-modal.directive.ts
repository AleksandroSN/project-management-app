import { Directive, EventEmitter, HostListener, Input, Output } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ModalComponent } from "@app/shared/components";

@Directive({
  selector: "[appOpenModal]",
})
export class OpenModalDirective {
  @Input() deleteEntity = "";

  @Output() callbackAfterClose = new EventEmitter();

  constructor(private dialog: MatDialog) {}

  @HostListener("click")
  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: this.deleteEntity } });
    dialogRef.afterClosed().subscribe((confirm) => {
      if (confirm) {
        this.callbackAfterClose.emit();
      }
    });
  }
}
