import { TestBed } from '@angular/core/testing';

import { CharactersInterceptorSpinner } from './characters-interceptor-spinner.interceptor';

describe('CharactersInterceptorSpinnerInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [CharactersInterceptorSpinner],
    })
  );

  it('should be created', () => {
    const interceptor: CharactersInterceptorSpinner = TestBed.inject(
      CharactersInterceptorSpinner
    );
    expect(interceptor).toBeTruthy();
  });
});
