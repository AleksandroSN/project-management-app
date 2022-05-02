import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { MatRippleModule } from "@angular/material/core";
import { LongPressModule } from "@app/shared/directives/long-press/long-press.module";
import { MatMenuModule } from "@angular/material/menu";
import { HomeComponent } from "./home.component";
import { CardComponent } from "./components";
import { HomeRoutingModule } from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent, CardComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    LongPressModule,
  ],
})
export class HomeModule {}
