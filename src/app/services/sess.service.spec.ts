import { TestBed } from '@angular/core/testing';

import { SessService } from './sess.service';

describe('SessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessService = TestBed.get(SessService);
    expect(service).toBeTruthy();
  });
});
