import { Component, OnInit } from "@angular/core";
import { IContactItem } from "src/app/shared/models/contact-item.interface";
import { ContactService } from "src/app/core/contact.service";

@Component({
  selector: "favorite-contacts-page",
  templateUrl: "favorite-contacts.component.html"
})
export class FavoriteContactsComponent implements OnInit {
  public favoriteContacts: Array<IContactItem> = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.favoriteContacts = this.contactService.contacts.filter(item => item.isFavorite);
  }
}
