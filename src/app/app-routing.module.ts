import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "@app/core/pages/not-found/not-found.component";
import { AuthGuard } from "@app/core";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", loadChildren: () => import("./home/home.module").then((m) => m.HomeModule) },
  {
    path: "board",
    loadChildren: () => import("./board/board.module").then((m) => m.BoardModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard],
  },
  { path: "auth", loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule) },
  {
    path: "profile",
    loadChildren: () => import("./profile/profile.module").then((m) => m.ProfileModule),
  },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
