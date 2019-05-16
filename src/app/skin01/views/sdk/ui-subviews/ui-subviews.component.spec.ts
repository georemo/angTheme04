import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSubviewsComponent } from './ui-subviews.component';

describe('UiSubviewsComponent', () => {
  let component: UiSubviewsComponent;
  let fixture: ComponentFixture<UiSubviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiSubviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiSubviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
