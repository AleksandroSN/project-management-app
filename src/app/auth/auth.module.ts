import { NgModule } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { TranslocoModule } from "@ngneat/transloco";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent, SignupFormComponent } from "./components";
import { SignupPageComponent, LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent, SignupPageComponent, LoginPageComponent],
  imports: [AuthRoutingModule, SharedModule, TranslocoModule],
  providers: [FormBuilder],
})
export class AuthModule {}
