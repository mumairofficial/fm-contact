import { NgModule } from "@angular/core";

import { ContactsHomeComponent } from "./contacts-home.component";
import { SharedModule } from "src/app/shared";
import { ContactFormComponent } from "./components";

@NgModule({
  declarations: [ContactsHomeComponent, ContactFormComponent],
  exports: [ContactsHomeComponent],
  imports: [SharedModule]
})
export class ContactsHomeModule {}
