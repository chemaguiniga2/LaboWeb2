import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fifa20Component } from './fifa20.component';

describe('Fifa20Component', () => {
  let component: Fifa20Component;
  let fixture: ComponentFixture<Fifa20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fifa20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fifa20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
