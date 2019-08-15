import { Component, OnInit, Output, EventEmitter, ChangeDetectionStrategy, Input } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { IContactItem } from "src/app/shared/models/contact-item.interface";
import { CustomValidators } from "../../validators";

@Component({
  selector: "contact-form",
  templateUrl: "contact-form.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactFormComponent implements OnInit {
  private colors = ["purple", "green", "pink", "orange", "yellow", "indigo", "teal", "red", "gray"];
  public contactForm: FormGroup;

  @Input() formTitle = "New Contact";
  @Input() update = false;
  @Input() contact: IContactItem;

  @Output() save: EventEmitter<IContactItem> = new EventEmitter<IContactItem>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initiateContactForm();
  }

  private initiateContactForm(): void {
    this.contactForm = this.fb.group({
      fullName: ["", Validators.compose([Validators.required, CustomValidators.noWhiteSpace])],
      email: ["", Validators.compose([Validators.required, Validators.email, CustomValidators.noWhiteSpace])],
      phone: ["", Validators.compose([CustomValidators.noWhiteSpace, CustomValidators.phone])]
    });

    if (this.update) {
      this.contactForm.patchValue({ ...this.contact });
    }
  }

  onSaveContact(): void {
    if (this.contactForm.invalid) {
      alert("Input full name and email address");
      return;
    }

    const postProcessing: IContactItem = this.cleanAndTrimFormValues();
    const formValue: IContactItem = { ...postProcessing, id: new Date().getTime(), color: this.randomColor() };
    this.save.emit(formValue);
    this.contactForm.reset();
  }

  private cleanAndTrimFormValues(): any {
    const formValuesCopy = { ...this.contactForm.value };
    const postProcessing: IContactItem = {};

    Object.keys(formValuesCopy).forEach(key => {
      postProcessing[key] = formValuesCopy[key].toString().trim();
    });

    return postProcessing;
  }

  onUpdateContact(): void {
    if (this.contactForm.invalid) {
      alert("Input full name and email address");
      return;
    }

    const formValue = { ...this.contact, ...this.contactForm.value };
    this.save.emit(formValue);
  }

  private randomColor(): string {
    const randomConst = Math.abs(Math.floor(Math.random() * this.colors.length));
    const c = this.colors[randomConst];
    return `bg-${c}-200 text-${c}-700`;
  }

  // helper form fields getters
  get fullName() {
    return this.contactForm.get("fullName");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get phone() {
    return this.contactForm.get("phone");
  }
}
