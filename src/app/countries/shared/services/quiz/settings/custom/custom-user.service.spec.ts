import { TestBed } from '@angular/core/testing';

import { CustomUserService } from './custom-user.service';

describe('CustomUserService', () => {
  let service: CustomUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
