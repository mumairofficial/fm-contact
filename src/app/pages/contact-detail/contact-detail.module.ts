import { NgModule } from "@angular/core";
import { ContactDetailRoutingModule } from "./contact-detail-routing.module";
import { ContactDetailComponent } from "./contact-detail.component";
import { SharedModule } from "src/app/shared";

@NgModule({
  declarations: [ContactDetailComponent],
  imports: [ContactDetailRoutingModule, SharedModule]
})
export class ContactDetailModule {}
