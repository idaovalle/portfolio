import { TestBed } from '@angular/core/testing';

import { BycontinentCapitalService } from './bycontinent-capital.service';

describe('BycontinentCapitalService', () => {
  let service: BycontinentCapitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BycontinentCapitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
