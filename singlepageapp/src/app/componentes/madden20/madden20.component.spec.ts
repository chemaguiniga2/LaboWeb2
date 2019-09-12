import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Madden20Component } from './madden20.component';

describe('Madden20Component', () => {
  let component: Madden20Component;
  let fixture: ComponentFixture<Madden20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Madden20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Madden20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
