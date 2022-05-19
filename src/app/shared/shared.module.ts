import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatDialogModule } from "@angular/material/dialog";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { TranslocoModule } from "@ngneat/transloco";
import {
  HeaderToComponent,
  RouteLinkComponent,
  ModalComponent,
  BoardModalComponent,
  CreateBoardButtonComponent,
} from "./components";
import { AuthInterceptor, ErrorCatcherInterceptor } from "./interceptors";
import { DetailBoardModalComponent } from "./components/detail-board-modal/detail-board-modal.component";

const MaterialsModules = [
  MatToolbarModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressBarModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatDialogModule,
];

@NgModule({
  declarations: [
    RouteLinkComponent,
    HeaderToComponent,
    ModalComponent,
    BoardModalComponent,
    CreateBoardButtonComponent,
    DetailBoardModalComponent,
  ],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: ErrorCatcherInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
    imports: [CommonModule, MaterialsModules, RouterModule, ReactiveFormsModule, FormsModule, TranslocoModule, MatRippleModule],
  exports: [
    CommonModule,
    MaterialsModules,
    RouterModule,
    ReactiveFormsModule,
    TranslocoModule,
    RouteLinkComponent,
    ModalComponent,
    HeaderToComponent,
    CreateBoardButtonComponent,
  ],
})
export class SharedModule {}
