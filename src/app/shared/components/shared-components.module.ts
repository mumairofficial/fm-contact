import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { ContactItemComponent } from "./contact-item/contact-item.component";
import { ContactFormComponent } from "./contact-form/contact-form.component";

@NgModule({
  declarations: [ContactItemComponent, ContactFormComponent],
  exports: [ContactItemComponent, ContactFormComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class SharedComponentsModule {}
