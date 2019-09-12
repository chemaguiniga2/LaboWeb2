import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpidermanComponent } from './spiderman.component';

describe('SpidermanComponent', () => {
  let component: SpidermanComponent;
  let fixture: ComponentFixture<SpidermanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpidermanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpidermanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
