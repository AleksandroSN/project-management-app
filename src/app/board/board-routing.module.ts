import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BoardPageComponent } from "@app/board/board-page/board-page.component";
import { DetailBoardPageComponent } from "@app/board/detail-board-page/detail-board-page.component";

const routes: Routes = [
  { path: "", component: BoardPageComponent },
  { path: ":id", component: DetailBoardPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BoardRoutingModule {}
