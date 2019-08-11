import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared";
import { FavoriteContactsComponent } from "./favorite-contacts.component";

describe("FavoriteContactPage", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [FavoriteContactsComponent]
    }).compileComponents();
  }));

  it("should create the favorite contact page", () => {
    const fixture = TestBed.createComponent(FavoriteContactsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
