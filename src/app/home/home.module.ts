import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HomeRoutingModule } from "./home-routing.module";
import { HomePageComponent } from "./pages";

@NgModule({
  declarations: [HomePageComponent],
  imports: [SharedModule, HomeRoutingModule],
})
export class HomeModule {}
