import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FavoriteContactsComponent } from "./favorite-contacts.component";

const routes: Routes = [
  {
    path: "",
    component: FavoriteContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class FavoriteContactsRoutingModule {}
