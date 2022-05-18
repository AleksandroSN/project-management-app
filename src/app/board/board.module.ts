import { NgModule } from "@angular/core";
import { BoardRoutingModule } from "@app/board/board-routing.module";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { SharedModule } from "@app/shared";
import { MatCardModule } from "@angular/material/card";
import { MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule } from "@angular/forms";
import { LongPressModule, OpenModalModule } from "@app/shared/directives";
import { DetailBoardPageComponent } from "@app/board/detail-board-page/detail-board-page.component";
import { BoardPageComponent } from "@app/board/board-page/board-page.component";
import { BoardPreviewCardComponent } from "@app/board/board-page/board-preview-card";
import { BoardColumnComponent } from "@app/board/detail-board-page/board-column";
import { BoardCardComponent } from "@app/board/detail-board-page/board-card";
import { TranslocoModule } from "@ngneat/transloco";
import { SearchPipe } from "./pipes/search.pipe";

@NgModule({
  declarations: [
    BoardColumnComponent,
    BoardCardComponent,
    BoardPreviewCardComponent,
    BoardPageComponent,
    DetailBoardPageComponent,
    SearchPipe,
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
    OpenModalModule,
    TranslocoModule,
    FormsModule,
  ],
})
export class BoardModule {}
