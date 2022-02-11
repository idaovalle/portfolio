import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesHomeComponent } from './countries-home.component';

describe('CountriesHomeComponent', () => {
  let component: CountriesHomeComponent;
  let fixture: ComponentFixture<CountriesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
