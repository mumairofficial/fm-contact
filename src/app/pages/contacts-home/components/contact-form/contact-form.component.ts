import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IContactItem } from "src/app/shared/models/contact-item.interface";

@Component({
  selector: "contact-form",
  templateUrl: "contact-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;

  @Output() save: EventEmitter<IContactItem> = new EventEmitter<IContactItem>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initiateContactForm();
  }

  private initiateContactForm(): void {
    this.contactForm = this.fb.group({
      fullName: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone: [""]
    });
  }

  onSaveContact(): void {
    if (this.contactForm.invalid) {
      alert("Invalid Form");
      return;
    }
    const formValue: IContactItem = { ...this.contactForm.value, id: new Date().getTime() };
    this.save.emit(formValue);
    this.contactForm.reset();
  }
}
