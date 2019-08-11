import { Injectable } from "@angular/core";
import { IContactItem } from "../shared/models/contact-item.interface";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  private initialContacts: Array<IContactItem> = [
    {
      id: 1,
      fullName: "John Doe",
      email: "john.doe@email.com",
      phone: "1234567890",
      isFavorite: false
    },
    {
      id: 2,
      fullName: "Jane Doe",
      email: "jane.doe@email.com",
      phone: "12345676543",
      isFavorite: true
    },
    {
      id: 3,
      fullName: "Jona Doe",
      email: "jona.doe@email.com",
      phone: "12345676543",
      isFavorite: true
    }
  ];

  public contacts$: BehaviorSubject<IContactItem[]> = new BehaviorSubject<IContactItem[]>(this.initialContacts);

  saveContact(contact: IContactItem) {
    const availableContacts = this.contacts$.getValue();
    this.contacts$.next([contact, ...availableContacts]);
  }

  toggleFavorite(targetContact: IContactItem) {
    const availableContacts = this.contacts$.getValue();
    const mutatedContactsList = availableContacts.map(contact => {
      if (contact.id === targetContact.id) {
        contact.isFavorite = targetContact.isFavorite;
      }

      return contact;
    });

    this.contacts$.next([...mutatedContactsList]);
  }
}
