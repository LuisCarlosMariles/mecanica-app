import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOtherMajorComponent } from './dialog-other-major.component';

describe('DialogOtherMajorComponent', () => {
  let component: DialogOtherMajorComponent;
  let fixture: ComponentFixture<DialogOtherMajorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOtherMajorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOtherMajorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
