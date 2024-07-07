import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProgramacaoComponent } from './card-programacao.component';

describe('CardProgramacaoComponent', () => {
  let component: CardProgramacaoComponent;
  let fixture: ComponentFixture<CardProgramacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardProgramacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardProgramacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
