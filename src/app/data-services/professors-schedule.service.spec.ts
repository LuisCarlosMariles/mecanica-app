import { TestBed } from '@angular/core/testing';

import { ProfessorsScheduleService } from './professors-schedule.service';

describe('ProfessorsScheduleService', () => {
  let service: ProfessorsScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfessorsScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
