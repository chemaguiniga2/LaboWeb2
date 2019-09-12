import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReddeadredemptionComponent } from './reddeadredemption.component';

describe('ReddeadredemptionComponent', () => {
  let component: ReddeadredemptionComponent;
  let fixture: ComponentFixture<ReddeadredemptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReddeadredemptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReddeadredemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
