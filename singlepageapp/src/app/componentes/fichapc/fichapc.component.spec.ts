import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichapcComponent } from './fichapc.component';

describe('FichapcComponent', () => {
  let component: FichapcComponent;
  let fixture: ComponentFixture<FichapcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichapcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichapcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
