import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SIGNUP_PAGE } from "@utils";
import { LoginPageComponent, SignupPageComponent } from "./pages";

const routes: Routes = [
  { path: "", component: LoginPageComponent },
  { path: SIGNUP_PAGE, component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
