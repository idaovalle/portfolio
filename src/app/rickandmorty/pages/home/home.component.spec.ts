import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCharactersComponent } from './characters-home.component';

describe('HomeComponent', () => {
  let component: HomeCharactersComponent;
  let fixture: ComponentFixture<HomeCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeCharactersComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
