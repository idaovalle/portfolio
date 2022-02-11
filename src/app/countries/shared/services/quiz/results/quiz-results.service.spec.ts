import { TestBed } from '@angular/core/testing';

import { QuizResultsService } from './quiz-results.service';

describe('QuizResultsService', () => {
  let service: QuizResultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizResultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
