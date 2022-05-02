import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent } from "./components/header";
import { FooterComponent } from "./components/footer";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
