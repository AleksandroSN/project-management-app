import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from "@angular/material/icon";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { RouterModule } from "@angular/router";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HeaderToComponent, RouteLinkComponent } from "./components";
import { AuthInterceptor } from "./interceptors";

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
];

@NgModule({
  declarations: [RouteLinkComponent, HeaderToComponent],
  providers: [
    MatDatepickerModule,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  imports: [CommonModule, MaterialsModules, RouterModule, ReactiveFormsModule],
  exports: [
    CommonModule,
    MaterialsModules,
    RouterModule,
    ReactiveFormsModule,
    RouteLinkComponent,
    HeaderToComponent,
  ],
})
export class SharedModule {}
