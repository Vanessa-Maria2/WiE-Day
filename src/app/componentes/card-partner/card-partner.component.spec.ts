import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPartnerComponent } from './card-partner.component';

describe('CardPartnerComponent', () => {
  let component: CardPartnerComponent;
  let fixture: ComponentFixture<CardPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
