import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichasreddeadredemptionComponent } from './fichasreddeadredemption.component';

describe('FichasreddeadredemptionComponent', () => {
  let component: FichasreddeadredemptionComponent;
  let fixture: ComponentFixture<FichasreddeadredemptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichasreddeadredemptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichasreddeadredemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
