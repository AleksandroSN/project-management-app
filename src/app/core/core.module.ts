import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent, FooterComponent } from "./components";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
