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
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { RouterModule } from "@angular/router";

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
  MatProgressSpinnerModule,
];

@NgModule({
  declarations: [],
  providers: [MatDatepickerModule],
  imports: [CommonModule, MaterialsModules, RouterModule, ReactiveFormsModule],
  exports: [CommonModule, MaterialsModules, RouterModule, ReactiveFormsModule],
})
export class SharedModule {}
