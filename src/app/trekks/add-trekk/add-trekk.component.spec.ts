import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrekkComponent } from './add-trekk.component';

describe('AddTrekkComponent', () => {
  let component: AddTrekkComponent;
  let fixture: ComponentFixture<AddTrekkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTrekkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrekkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
