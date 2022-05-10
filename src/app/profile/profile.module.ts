import { NgModule } from "@angular/core";
import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { EditProfileComponent } from "./component/edit-profile/edit-profile.component";

@NgModule({
  declarations: [ProfilePageComponent, EditProfileComponent],
  imports: [ProfileRoutingModule],
})
export class ProfileModule {}
