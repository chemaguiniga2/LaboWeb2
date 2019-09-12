import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosplayComponent } from './juegosplay.component';

describe('JuegosplayComponent', () => {
  let component: JuegosplayComponent;
  let fixture: ComponentFixture<JuegosplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegosplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
