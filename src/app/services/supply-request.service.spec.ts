import { TestBed } from '@angular/core/testing';

import { SupplyRequestService } from './supply-request.service';

describe('SupplyRequestService', () => {
  let service: SupplyRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupplyRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
