import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent, SignupFormComponent } from "./components";
import { SignupPageComponent, LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent, SignupPageComponent, LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
