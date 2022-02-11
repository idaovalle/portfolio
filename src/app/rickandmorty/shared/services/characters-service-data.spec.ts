import { TestBed } from '@angular/core/testing';

import { CharactersServiceData } from './characters-service-data';

describe('DataService', () => {
  let service: CharactersServiceData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersServiceData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
