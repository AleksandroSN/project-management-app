import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { TranslocoModule } from "@ngneat/transloco";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./pages";

@NgModule({
  declarations: [HomePageComponent],
  imports: [SharedModule, HomeRoutingModule, TranslocoModule],
})
export class HomeModule {}
