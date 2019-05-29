import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageslideleftComponent } from './pageslideleft.component';

describe('PageslideleftComponent', () => {
  let component: PageslideleftComponent;
  let fixture: ComponentFixture<PageslideleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageslideleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageslideleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
