import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardScheduleComponent } from './card-schedule.component';

describe('CardScheduleComponent', () => {
  let component: CardScheduleComponent;
  let fixture: ComponentFixture<CardScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardScheduleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
