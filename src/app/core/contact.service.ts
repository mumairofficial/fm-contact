import { Injectable } from "@angular/core";
import { IContactItem } from "../shared/models/contact-item.interface";
import { BehaviorSubject } from "rxjs";
import { Storage } from "../shared/lib/storage.wrapper";

const storageKey = {
  CONTACTS: "contacts"
};

@Injectable({
  providedIn: "root"
})
export class ContactService {
  public contacts$: BehaviorSubject<IContactItem[]> = new BehaviorSubject<IContactItem[]>(null);

  constructor(private storage: Storage) {
    const storageContacts: Array<IContactItem> = this.storage.get(storageKey.CONTACTS);
    this.contacts$.next(storageContacts);
  }

  saveContact(contact: IContactItem) {
    const availableContacts = this.contacts$.getValue();
    let contactsToSave = [contact];

    if (availableContacts !== null) {
      contactsToSave = [contact, ...availableContacts];
    }

    this.storage.save(storageKey.CONTACTS, contactsToSave);
    this.contacts$.next(contactsToSave);
  }

  toggleFavorite(targetContact: IContactItem) {
    const availableContacts = this.contacts$.getValue();
    const mutatedContactsList = availableContacts.map(contact => {
      if (contact.id === targetContact.id) {
        contact.isFavorite = targetContact.isFavorite;
      }

      return contact;
    });

    this.storage.save(storageKey.CONTACTS, mutatedContactsList);
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

    this.storage.save(storageKey.CONTACTS, updated);
    this.contacts$.next([...updated]);
  }
}
