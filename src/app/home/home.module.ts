import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { LongPressModule } from "@app/shared/directives/long-press/long-press.module";
import { MatMenuModule } from "@angular/material/menu";
import { HomeComponent } from "./home.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: HomeComponent },
    ]),
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    LongPressModule,
  ],
})
export class HomeModule {}
