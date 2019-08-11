import { Component, Input, Output, EventEmitter } from "@angular/core";
import { IContactItem } from "../../models/contact-item.interface";

@Component({
  selector: "contact-item",
  templateUrl: "contact-item.component.html"
})
export class ContactItemComponent {
  @Input() contact: IContactItem;
  @Output() onFavorite: EventEmitter<IContactItem> = new EventEmitter<IContactItem>();

  public onToggleFavorite(): void {
    this.onFavorite.emit({
      ...this.contact,
      isFavorite: !this.contact.isFavorite
    });
  }
}
