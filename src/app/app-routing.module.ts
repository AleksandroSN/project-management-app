import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HOME_PAGE } from "@utils";
import { NotFoundComponent } from "@app/core/pages/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: `/${HOME_PAGE}`, pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
