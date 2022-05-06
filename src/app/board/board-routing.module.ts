import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardPageComponent, DetailBoardPageComponent } from "./pages";

const routes: Routes = [
  { path: "", component: BoardPageComponent },
  { path: ":id", component: DetailBoardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
