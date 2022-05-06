import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ModuleHeaderModule } from "@app/shared/components/module-header/module-header.module";
import { BoardRoutingModule } from "@app/board/board-routing.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { BoardComponent } from "./board.component";
import { BoardColumnComponent } from "./components/board-column/board-column.component";
import { BoardCardComponent } from "./components/board-card/board-card.component";

@NgModule({
  declarations: [
    BoardComponent,
    BoardColumnComponent,
    BoardCardComponent,
  ],
  imports: [
    CommonModule,
    BoardRoutingModule,
    ModuleHeaderModule,
    DragDropModule,
  ],
})
export class BoardModule {}
