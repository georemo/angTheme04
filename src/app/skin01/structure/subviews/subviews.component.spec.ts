import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubviewsComponent } from './subviews.component';

describe('SubviewsComponent', () => {
  let component: SubviewsComponent;
  let fixture: ComponentFixture<SubviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
