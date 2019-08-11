import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared";
import { LeftNavigationComponent } from "./left-navigation.component";
import { TopbarComponent } from "../topbar/topbar.component";

describe("LeftNavigationComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [LeftNavigationComponent, TopbarComponent]
    }).compileComponents();
  }));

  it("should create the left navigation component", () => {
    const fixture = TestBed.createComponent(LeftNavigationComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
