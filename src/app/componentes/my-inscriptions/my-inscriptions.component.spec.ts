import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyInscriptionsComponent } from './my-inscriptions.component';

describe('MyInscriptionsComponent', () => {
  let component: MyInscriptionsComponent;
  let fixture: ComponentFixture<MyInscriptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyInscriptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyInscriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
