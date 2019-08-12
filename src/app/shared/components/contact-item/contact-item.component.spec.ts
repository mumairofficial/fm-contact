import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "../../shared.module";
import { ContactItemComponent } from "./contact-item.component";

describe("ContactItem", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [ContactItemComponent]
    }).compileComponents();
  }));

  it("should create the contact item component", () => {
    const fixture = TestBed.createComponent(ContactItemComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
