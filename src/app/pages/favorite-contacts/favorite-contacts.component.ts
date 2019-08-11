import { Component, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

import { IContactItem } from "src/app/shared/models/contact-item.interface";
import { ContactService } from "src/app/core/contact.service";

@Component({
  selector: "favorite-contacts-page",
  templateUrl: "favorite-contacts.component.html"
})
export class FavoriteContactsComponent implements OnInit {
  public contacts$: BehaviorSubject<Array<IContactItem>>;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts$ = this.contactService.contacts$;
  }

  toggleFavorite($event: IContactItem): void {
    this.contactService.toggleFavorite($event);
  }
}
