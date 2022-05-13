import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BoardModalComponent } from "./board-modal.component";

describe("NewBoardModalComponent", () => {
  let component: BoardModalComponent;
  let fixture: ComponentFixture<BoardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardModalComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
