import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPartnerComponent } from './about-partner.component';

describe('AboutPartnerComponent', () => {
  let component: AboutPartnerComponent;
  let fixture: ComponentFixture<AboutPartnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutPartnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
