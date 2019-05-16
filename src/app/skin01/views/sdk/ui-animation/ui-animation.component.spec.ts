import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAnimationComponent } from './ui-animation.component';

describe('UiAnimationComponent', () => {
  let component: UiAnimationComponent;
  let fixture: ComponentFixture<UiAnimationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiAnimationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
