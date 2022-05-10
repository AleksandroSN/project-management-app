import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent, FooterComponent } from "./components";
import { AuthGuard } from "./guards";
import { NotFoundComponent } from "./pages";
import { HttpService, InputValidationService, AuthService, UserService } from "./services";

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  providers: [HttpService, InputValidationService, AuthService, AuthGuard, UserService],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
