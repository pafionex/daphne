import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavUtilsComponent } from './nav-utils.component';

describe('NavUtilsComponent', () => {
  let component: NavUtilsComponent;
  let fixture: ComponentFixture<NavUtilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavUtilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavUtilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
