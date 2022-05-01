import { NgModule } from "@angular/core";
import { SharedModule } from "@app/shared";
import { HeaderComponent } from "./components/header";

@NgModule({
  declarations: [HeaderComponent],
  imports: [SharedModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
