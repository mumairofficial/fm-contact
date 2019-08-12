import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared";
import { ContactDetailComponent } from "./contact-detail.component";

describe("ContactDetailPage", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ContactDetailComponent]
    }).compileComponents();
  }));

  it("should create the contact detail page", () => {
    const fixture = TestBed.createComponent(ContactDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
