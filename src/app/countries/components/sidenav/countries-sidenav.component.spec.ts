import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesSidenavComponent } from './countries-sidenav.component';

describe('CountriesSidenavComponent', () => {
  let component: CountriesSidenavComponent;
  let fixture: ComponentFixture<CountriesSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountriesSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountriesSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
