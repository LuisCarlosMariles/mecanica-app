import { TestBed } from '@angular/core/testing';

import { ScheduleVisualizationGuard } from './schedule-visualization.guard';

describe('ScheduleVisualizationGuard', () => {
  let guard: ScheduleVisualizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ScheduleVisualizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
