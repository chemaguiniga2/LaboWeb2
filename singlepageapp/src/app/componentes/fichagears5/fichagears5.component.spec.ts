import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fichagears5Component } from './fichagears5.component';

describe('Fichagears5Component', () => {
  let component: Fichagears5Component;
  let fixture: ComponentFixture<Fichagears5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fichagears5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fichagears5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
