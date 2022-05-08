import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPageComponent, SignupPageComponent } from "./pages";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "signin", component: LoginPageComponent },
  { path: "signup", component: SignupPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
