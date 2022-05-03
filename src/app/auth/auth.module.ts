import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormsModule } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { AuthRoutingModule } from "./auth-routing.module";
import { LoginFormComponent, SignupFormComponent } from "./components";
import { SignupPageComponent, LoginPageComponent } from "./pages";

@NgModule({
  declarations: [LoginFormComponent, SignupFormComponent, SignupPageComponent, LoginPageComponent],
  imports: [CommonModule, AuthRoutingModule, FormsModule, SharedModule],
  providers: [FormBuilder],
})
export class AuthModule {}
