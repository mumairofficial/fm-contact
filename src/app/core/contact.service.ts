import { Injectable } from "@angular/core";
import { IContactItem } from "../shared/models/contact-item.interface";

@Injectable({
  providedIn: "root"
})
export class ContactService {
  public contacts: Array<IContactItem> = [
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
}
