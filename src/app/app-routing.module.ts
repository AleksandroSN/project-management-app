import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HOME_PAGE } from "@utils";

const routes: Routes = [
  { path: "", redirectTo: `/${HOME_PAGE}`, pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
