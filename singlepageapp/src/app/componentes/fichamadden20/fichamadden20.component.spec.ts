import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Fichamadden20Component } from './fichamadden20.component';

describe('Fichamadden20Component', () => {
  let component: Fichamadden20Component;
  let fixture: ComponentFixture<Fichamadden20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fichamadden20Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Fichamadden20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
