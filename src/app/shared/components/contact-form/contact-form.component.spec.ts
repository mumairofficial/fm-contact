import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { ContactFormComponent } from "./contact-form.component";
import { ReactiveFormsModule } from "@angular/forms";

describe("ContactForm", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [ContactFormComponent]
    }).compileComponents();
  }));

  it("should create the contact form component", () => {
    const fixture = TestBed.createComponent(ContactFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
