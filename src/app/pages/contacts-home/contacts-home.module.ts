import { NgModule } from "@angular/core";

import { ContactsHomeComponent } from "./contacts-home.component";
import { SharedModule } from "src/app/shared";

@NgModule({
  declarations: [ContactsHomeComponent],
  exports: [ContactsHomeComponent],
  imports: [SharedModule]
})
export class ContactsHomeModule {}
