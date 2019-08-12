import { NgModule } from "@angular/core";
import { ContactDetailRoutingModule } from "./contact-detail-routing.module";
import { ContactDetailComponent } from "./contact-detail.component";

@NgModule({
  declarations: [ContactDetailComponent],
  imports: [ContactDetailRoutingModule]
})
export class ContactDetailModule {}
