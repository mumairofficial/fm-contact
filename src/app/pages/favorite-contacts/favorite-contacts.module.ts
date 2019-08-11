import { NgModule } from "@angular/core";

import { FavoriteContactsRoutingModule } from "./favorite-contacts-routing.module";
import { FavoriteContactsComponent } from "./favorite-contacts.component";
import { SharedModule } from "src/app/shared";

@NgModule({
  declarations: [FavoriteContactsComponent],
  imports: [FavoriteContactsRoutingModule, SharedModule]
})
export class FavoriteContactsModule {}
