import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSidenavComponent } from './characters-sidenav.component';

describe('CharactersSidenavComponent', () => {
  let component: CharactersSidenavComponent;
  let fixture: ComponentFixture<CharactersSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
