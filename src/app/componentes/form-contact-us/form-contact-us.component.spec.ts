import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormContactUsComponent } from './form-contact-us.component';

describe('FormContactUsComponent', () => {
  let component: FormContactUsComponent;
  let fixture: ComponentFixture<FormContactUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormContactUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
