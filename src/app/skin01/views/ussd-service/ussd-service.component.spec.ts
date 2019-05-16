import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UssdServiceComponent } from './ussd-service.component';

describe('UssdServiceComponent', () => {
  let component: UssdServiceComponent;
  let fixture: ComponentFixture<UssdServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UssdServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UssdServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
