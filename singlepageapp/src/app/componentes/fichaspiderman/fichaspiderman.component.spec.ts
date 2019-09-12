import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaspidermanComponent } from './fichaspiderman.component';

describe('FichaspidermanComponent', () => {
  let component: FichaspidermanComponent;
  let fixture: ComponentFixture<FichaspidermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaspidermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaspidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
