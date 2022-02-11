import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersCardComponent } from './characters-card.component';
import { CharactersCardModule } from './characters-card.module';

describe('CharactersCardComponent', () => {
  let component: CharactersCardComponent;
  let fixture: ComponentFixture<CharactersCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharactersCardComponent],
      imports: [CharactersCardModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
