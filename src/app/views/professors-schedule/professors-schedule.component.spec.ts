import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorsScheduleComponent } from './professors-schedule.component';

describe('ProfessorsScheduleComponent', () => {
  let component: ProfessorsScheduleComponent;
  let fixture: ComponentFixture<ProfessorsScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorsScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
