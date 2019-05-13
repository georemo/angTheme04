import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesliderightComponent } from './pageslideright.component';

describe('PagesliderightComponent', () => {
  let component: PagesliderightComponent;
  let fixture: ComponentFixture<PagesliderightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagesliderightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesliderightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
