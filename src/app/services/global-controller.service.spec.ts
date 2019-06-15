import { TestBed } from '@angular/core/testing';

import { GlobalControllerService } from './global-controller.service';

describe('GlobalControllerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalControllerService = TestBed.get(GlobalControllerService);
    expect(service).toBeTruthy();
  });
});
