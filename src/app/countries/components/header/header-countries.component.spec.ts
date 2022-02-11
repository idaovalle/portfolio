import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderCountriesComponent } from './header-countries.component';

describe('HeaderCountriesComponent', () => {
  let component: HeaderCountriesComponent;
  let fixture: ComponentFixture<HeaderCountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderCountriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
