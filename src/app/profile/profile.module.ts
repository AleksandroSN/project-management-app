import { NgModule } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { SharedModule } from "@app/shared";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { EditProfileComponent } from "./component/edit-profile/edit-profile.component";

@NgModule({
  declarations: [ProfilePageComponent, EditProfileComponent],
  imports: [ProfileRoutingModule, SharedModule],
  providers: [FormBuilder],
})
export class ProfileModule {}
