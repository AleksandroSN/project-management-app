import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "@app/core/pages/not-found/not-found.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
  {
    path: "board",
    loadChildren: () => import("./board/board.module").then((m) => m.BoardModule),
  },
  { path: "auth", loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule) },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
