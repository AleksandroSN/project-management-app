import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent, FooterComponent } from "./components";
import { HttpService } from "./services";

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  providers: [HttpService],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
