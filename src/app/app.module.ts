import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { SharedModule } from "@app/shared";
import { CoreModule } from "@app/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot([]),
    EffectsModule.forRoot([]),
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
