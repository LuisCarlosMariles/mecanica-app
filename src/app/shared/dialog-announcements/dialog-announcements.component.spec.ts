import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAnnouncementsComponent } from './dialog-announcements.component';

describe('DialogAnnouncementsComponent', () => {
  let component: DialogAnnouncementsComponent;
  let fixture: ComponentFixture<DialogAnnouncementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogAnnouncementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAnnouncementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
