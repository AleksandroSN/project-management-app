import { NgModule } from "@angular/core";
import { BoardRoutingModule } from "@app/board/board-routing.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SharedModule } from "@app/shared";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { LongPressModule } from "@app/shared/directives";
import { BoardColumnComponent, BoardCardComponent, BoardPreviewCardComponent } from "./components";
import { BoardPageComponent, DetailBoardPageComponent } from "./pages";

@NgModule({
  declarations: [
    BoardColumnComponent,
    BoardCardComponent,
    BoardPreviewCardComponent,
    BoardPageComponent,
    DetailBoardPageComponent,
  ],
  imports: [
    BoardRoutingModule,
    DragDropModule,
    SharedModule,
    MatCardModule,
    MatIconModule,
    MatRippleModule,
    MatMenuModule,
    LongPressModule,
  ],
})
export class BoardModule {}
