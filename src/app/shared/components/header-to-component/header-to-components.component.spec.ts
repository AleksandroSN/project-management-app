import { ComponentFixture, TestBed } from "@angular/core/testing";

import { HeaderToComponent } from "./header-to-components.component";

describe("HeaderToComponent", () => {
  let component: HeaderToComponent;
  let fixture: ComponentFixture<HeaderToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ declarations: [HeaderToComponent] }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
