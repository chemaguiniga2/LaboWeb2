import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichagtavComponent } from './fichagtav.component';

describe('FichagtavComponent', () => {
  let component: FichagtavComponent;
  let fixture: ComponentFixture<FichagtavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichagtavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichagtavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
