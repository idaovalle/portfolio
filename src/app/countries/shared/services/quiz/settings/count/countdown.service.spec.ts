import { TestBed } from '@angular/core/testing';

import { CountDownService } from './countdown.service';

describe('SettingsQuizService', () => {
  let service: CountDownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountDownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
