import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardParticipantComponent } from './card-participant.component';

describe('CardParticipantComponent', () => {
  let component: CardParticipantComponent;
  let fixture: ComponentFixture<CardParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardParticipantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
