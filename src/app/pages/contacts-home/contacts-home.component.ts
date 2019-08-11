import { Component, OnInit } from "@angular/core";
import { IContactItem } from "src/app/shared/models/contact-item.interface";
import { ContactService } from "src/app/core/contact.service";

@Component({
  selector: "contacts-home-page",
  templateUrl: "contacts-home.component.html"
})
export class ContactsHomeComponent implements OnInit {
  public contacts: Array<IContactItem> = [];

  constructor(private contactsService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
  }
}
