import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared";
import { LayoutComponent } from "./layout.component";
import { LeftNavigationComponent } from "../left-navigation/left-navigation.component";
import { TopbarComponent } from "../topbar/topbar.component";

describe("PageLayoutComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [LayoutComponent, LeftNavigationComponent, TopbarComponent]
    }).compileComponents();
  }));

  it("should create the page layout component", () => {
    const fixture = TestBed.createComponent(LayoutComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
