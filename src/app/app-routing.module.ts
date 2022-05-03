import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "@app/core/pages/not-found/not-found.component";
import { HOME_PAGE, LOGIN_PAGE } from "@utils";

const routes: Routes = [
  { path: "", redirectTo: `/${HOME_PAGE}`, pathMatch: "full" },
  { path: HOME_PAGE, loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
  { path: LOGIN_PAGE, loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule) },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
