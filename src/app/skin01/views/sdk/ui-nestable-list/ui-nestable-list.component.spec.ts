import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiNestableListComponent } from './ui-nestable-list.component';

describe('UiNestableListComponent', () => {
  let component: UiNestableListComponent;
  let fixture: ComponentFixture<UiNestableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiNestableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiNestableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
