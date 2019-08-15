import { Injectable } from "@angular/core";
import { IContactItem } from "../models/contact-item.interface";

@Injectable({
  providedIn: "root"
})
export class Storage {
  public save(key: string, value: object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key: string): Array<IContactItem> {
    const values = localStorage.getItem(key);
    if (values === null) {
      return null;
    }
    return JSON.parse(localStorage.getItem(key));
  }
}
