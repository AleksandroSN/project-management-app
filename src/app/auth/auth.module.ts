import { NgModule } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent, SignupFormComponent } from "./components";
import { SignupPageComponent, LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent, SignupPageComponent, LoginPageComponent],
  imports: [AuthRoutingModule, SharedModule],
  providers: [FormBuilder],
})
export class AuthModule {}
