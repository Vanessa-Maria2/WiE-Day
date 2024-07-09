import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsInscriptionComponent } from './forms-inscription.component';

describe('FormsInscriptionComponent', () => {
  let component: FormsInscriptionComponent;
  let fixture: ComponentFixture<FormsInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsInscriptionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormsInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
