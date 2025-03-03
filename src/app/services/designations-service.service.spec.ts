import { TestBed } from '@angular/core/testing';

import { DesignationsServiceService } from './designations-service.service';

describe('DesignationsServiceService', () => {
  let service: DesignationsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesignationsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
