import { TestBed } from '@angular/core/testing';

import { ScheduleMapService } from './schedule-map.service';

describe('ScheduleMapService', () => {
  let service: ScheduleMapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScheduleMapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
