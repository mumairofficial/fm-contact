import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { SharedModule } from "src/app/shared";
import { TopbarComponent } from "./topbar.component";

describe("TopbarComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [TopbarComponent]
    }).compileComponents();
  }));

  it("should create the topbar component", () => {
    const fixture = TestBed.createComponent(TopbarComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
