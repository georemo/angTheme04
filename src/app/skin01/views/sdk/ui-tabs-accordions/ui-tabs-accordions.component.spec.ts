import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiTabsAccordionsComponent } from './ui-tabs-accordions.component';

describe('UiTabsAccordionsComponent', () => {
  let component: UiTabsAccordionsComponent;
  let fixture: ComponentFixture<UiTabsAccordionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiTabsAccordionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiTabsAccordionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
