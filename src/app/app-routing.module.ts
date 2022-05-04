import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HOME_PAGE } from "@utils";

const routes: Routes = [
  { path: "", redirectTo: `/${HOME_PAGE}`, pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
  { path: "board/:id", loadChildren: () => import("./board/board.module").then((m) => m.BoardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
