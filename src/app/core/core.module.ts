import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent, FooterComponent } from "./components";
import { HttpService } from "./services";
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotFoundComponent],
  providers: [HttpService],
  imports: [SharedModule],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
