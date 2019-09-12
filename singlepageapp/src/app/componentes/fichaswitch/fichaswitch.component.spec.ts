import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaswitchComponent } from './fichaswitch.component';

describe('FichaswitchComponent', () => {
  let component: FichaswitchComponent;
  let fixture: ComponentFixture<FichaswitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaswitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaswitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
