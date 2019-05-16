import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSlidersComponent } from './ui-sliders.component';

describe('UiSlidersComponent', () => {
  let component: UiSlidersComponent;
  let fixture: ComponentFixture<UiSlidersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSlidersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSlidersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
