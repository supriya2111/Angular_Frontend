import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekksComponent } from './trekks.component';

describe('TrekksComponent', () => {
  let component: TrekksComponent;
  let fixture: ComponentFixture<TrekksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
