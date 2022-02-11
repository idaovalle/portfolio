import { TestBed } from '@angular/core/testing';

import { CharactersServiceFavorites } from './characters-service.favorites';

describe('LocalStorageCharactersService', () => {
  let service: CharactersServiceFavorites;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharactersServiceFavorites);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
