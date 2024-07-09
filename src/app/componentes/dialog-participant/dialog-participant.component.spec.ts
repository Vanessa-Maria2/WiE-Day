import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogParticipantComponent } from './dialog-participant.component';

describe('DialogParticipantComponent', () => {
  let component: DialogParticipantComponent;
  let fixture: ComponentFixture<DialogParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DialogParticipantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DialogParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
