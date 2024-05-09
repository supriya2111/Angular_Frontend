import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkCardComponent } from './trekk-card.component';

describe('TrekkCardComponent', () => {
  let component: TrekkCardComponent;
  let fixture: ComponentFixture<TrekkCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekkCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
