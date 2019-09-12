import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaplayComponent } from './fichaplay.component';

describe('FichaplayComponent', () => {
  let component: FichaplayComponent;
  let fixture: ComponentFixture<FichaplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
