import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByWorldComponent } from './by-world.component';

describe('ByWorldComponent', () => {
  let component: ByWorldComponent;
  let fixture: ComponentFixture<ByWorldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByWorldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ByWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
