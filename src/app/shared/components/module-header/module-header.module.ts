import { NgModule } from "@angular/core";
import { ModuleHeaderComponent } from "@app/shared/components/module-header/module-header.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [ModuleHeaderComponent],
  imports: [CommonModule],
  exports: [ModuleHeaderComponent],
})
export class ModuleHeaderModule {}
