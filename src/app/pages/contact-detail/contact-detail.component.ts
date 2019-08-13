import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { IContactItem } from "src/app/shared/models/contact-item.interface";
import { ContactService } from "src/app/core/contact.service";

@Component({
  selector: "contact-detail-page",
  templateUrl: "contact-detail.component.html"
})
export class ContactDetailComponent {
  public contact: IContactItem;

  constructor(private route: ActivatedRoute, private router: Router, private contactService: ContactService) {
    this.route.paramMap.subscribe(params => {
      const contactId = params.get("id");
      this.fetchContact(Number(contactId));
    });
  }

  private fetchContact(contactId): void {
    this.contact = this.contactService.getContact(contactId);
  }

  public updateContact(contact: IContactItem) {
    this.contactService.updateContact(contact);
    this.router.navigate(["/contacts"]);
  }
}
