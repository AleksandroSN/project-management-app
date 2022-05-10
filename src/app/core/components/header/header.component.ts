import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { AuthService } from "@app/core/services";
import { selectUserAuth } from "@app/redux";
import { ModalComponent } from "@app/shared/components/modal/modal.component";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent implements OnInit {
  isAuth$: Observable<boolean>;

  currentLang = "EN";
  constructor(private store: Store, private authService: AuthService, public dialog: MatDialog) {
    this.isAuth$ = this.store.select(selectUserAuth);
  }

  ngOnInit(): void {
    this.currentLang = "EN";
    this.authService.autoLogin();
  }

  logout() {
    this.authService.logout();
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, { data: { name: "something" } });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}
