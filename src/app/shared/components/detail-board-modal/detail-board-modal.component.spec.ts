import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBoardModalComponent } from './detail-board-modal.component';

describe('DetailBoardModalComponent', () => {
  let component: DetailBoardModalComponent;
  let fixture: ComponentFixture<DetailBoardModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailBoardModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailBoardModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
