import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosxboxComponent } from './juegosxbox.component';

describe('JuegosxboxComponent', () => {
  let component: JuegosxboxComponent;
  let fixture: ComponentFixture<JuegosxboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosxboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosxboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
