import { NgModule } from "@angular/core";
import { LongPressDirective } from "@app/shared/directives/long-press/long-press.directive";

@NgModule({
  declarations: [
    LongPressDirective,
  ],
  exports: [
    LongPressDirective,
  ],
})
export class LongPressModule {}
