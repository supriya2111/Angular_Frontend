import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkDataComponent } from './trekk-data.component';

describe('TrekkDataComponent', () => {
  let component: TrekkDataComponent;
  let fixture: ComponentFixture<TrekkDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekkDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
