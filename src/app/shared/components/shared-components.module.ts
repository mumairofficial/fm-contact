import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactItemComponent } from "./contact-item/contact-item.component";

@NgModule({
  declarations: [ContactItemComponent],
  exports: [ContactItemComponent],
  imports: [CommonModule]
})
export class SharedComponentsModule {}
