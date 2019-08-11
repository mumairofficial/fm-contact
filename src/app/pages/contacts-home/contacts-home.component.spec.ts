import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared";
import { ContactsHomeComponent } from "./contacts-home.component";
import { ContactFormComponent } from "./components";

describe("ContactHomePage", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ContactsHomeComponent, ContactFormComponent]
    }).compileComponents();
  }));

  it("should create the contact home page", () => {
    const fixture = TestBed.createComponent(ContactsHomeComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
