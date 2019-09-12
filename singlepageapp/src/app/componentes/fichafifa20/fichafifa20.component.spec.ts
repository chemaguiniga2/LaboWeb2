import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fichafifa20Component } from './fichafifa20.component';

describe('Fichafifa20Component', () => {
  let component: Fichafifa20Component;
  let fixture: ComponentFixture<Fichafifa20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fichafifa20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fichafifa20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
