import { NgModule } from "@angular/core";
import { StickyHeaderDirective } from "./sticky-header.directive";

@NgModule({
  declarations: [StickyHeaderDirective],
  exports: [StickyHeaderDirective],
})
export class StickyHeaderModule {}
