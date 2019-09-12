import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Gears5Component } from './gears5.component';

describe('Gears5Component', () => {
  let component: Gears5Component;
  let fixture: ComponentFixture<Gears5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Gears5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Gears5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
