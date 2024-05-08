import { TestBed } from '@angular/core/testing';

import { AddTrekkGuard } from './add-trekk.guard';

describe('AddTrekkGuard', () => {
  let guard: AddTrekkGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AddTrekkGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
