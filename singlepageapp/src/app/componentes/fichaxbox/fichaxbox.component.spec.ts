import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaxboxComponent } from './fichaxbox.component';

describe('FichaxboxComponent', () => {
  let component: FichaxboxComponent;
  let fixture: ComponentFixture<FichaxboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaxboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaxboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
