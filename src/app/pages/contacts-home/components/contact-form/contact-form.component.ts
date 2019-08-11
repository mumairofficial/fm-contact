import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "contact-form",
  templateUrl: "contact-form.component.html"
})
export class ContactFormComponent implements OnInit {
  public contactForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initiateContactForm();
  }

  private initiateContactForm(): void {
    this.contactForm = this.fb.group({
      id: [new Date().getTime()],
      fullName: ["", Validators.required],
      email: ["", Validators.compose([Validators.required, Validators.email])],
      phone: [""]
    });
  }
}
