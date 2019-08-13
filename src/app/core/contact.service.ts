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
      color: "bg-purple-200 text-purple-700",
      isFavorite: false
    },
    {
      id: 2,
      fullName: "Jane Doe",
      email: "jane.doe@email.com",
      phone: "12345676543",
      color: "bg-blue-200 text-blue-700",
      isFavorite: true
    },
    {
      id: 3,
      fullName: "Jona Doe",
      email: "jona.doe@email.com",
      phone: "12345676543",
      color: "bg-green-200 text-green-700",
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

  getContact(contactId: number): IContactItem {
    const availableContacts = this.contacts$.getValue();
    return availableContacts.filter(contact => contact.id === contactId)[0];
  }

  updateContact(contactToUpdate: IContactItem): void {
    const availableContacts = this.contacts$.getValue();
    const updated = availableContacts.map(contact => {
      if (contact.id === contactToUpdate.id) {
        contact.fullName = contactToUpdate.fullName;
        contact.email = contactToUpdate.email;
        contact.phone = contactToUpdate.phone;
      }

      return contact;
    });

    this.contacts$.next([...updated]);
  }
}
