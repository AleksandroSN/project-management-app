import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent, FooterComponent } from "./components";
import { NotFoundComponent } from "./pages";
import { HttpService, InputValidationService, LoginService } from "./services";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  providers: [HttpService, InputValidationService, LoginService],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
