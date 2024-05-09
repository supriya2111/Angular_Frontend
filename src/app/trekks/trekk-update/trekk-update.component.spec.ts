import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrekkUpdateComponent } from './trekk-update.component';

describe('TrekkUpdateComponent', () => {
  let component: TrekkUpdateComponent;
  let fixture: ComponentFixture<TrekkUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrekkUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrekkUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
