import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { IContactItem } from "../../models/contact-item.interface";

/**
 * Contact Item Re-Useable component
 * takes contact item and render the list item
 */

@Component({
  selector: "contact-item",
  templateUrl: "contact-item.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactItemComponent {
  @Input() contact: IContactItem;
  @Output() favorite: EventEmitter<IContactItem> = new EventEmitter<IContactItem>();

  public onToggleFavorite(): void {
    this.favorite.emit({
      ...this.contact,
      isFavorite: !this.contact.isFavorite
    });
  }
}
