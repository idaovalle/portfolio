import { TestBed } from '@angular/core/testing';

import { ByworldCapitalService } from './byworld-capital.service';

describe('ByworldCapitalService', () => {
  let service: ByworldCapitalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ByworldCapitalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
