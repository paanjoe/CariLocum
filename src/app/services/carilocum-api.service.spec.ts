import { TestBed } from '@angular/core/testing';

import { CarilocumAPIService } from './carilocum-api.service';

describe('CarilocumAPIService', () => {
  let service: CarilocumAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarilocumAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
