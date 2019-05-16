import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtModalsComponent } from './ext-modals.component';

describe('ExtModalsComponent', () => {
  let component: ExtModalsComponent;
  let fixture: ComponentFixture<ExtModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
