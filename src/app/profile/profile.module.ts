import { NgModule } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { OpenModalModule } from "@app/shared/directives";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfilePageComponent } from "./pages";
import { EditProfileComponent } from "./component";

@NgModule({
  declarations: [ProfilePageComponent, EditProfileComponent],
  imports: [ProfileRoutingModule, SharedModule, OpenModalModule],
  providers: [FormBuilder],
})
export class ProfileModule {}
