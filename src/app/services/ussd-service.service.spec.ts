import { TestBed } from '@angular/core/testing';

import { UssdServiceService } from './ussd-service.service';

describe('UssdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UssdServiceService = TestBed.get(UssdServiceService);
    expect(service).toBeTruthy();
  });
});
