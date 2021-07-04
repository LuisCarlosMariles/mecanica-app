import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCubicleComponent } from './dialog-cubicle.component';

describe('DialogCubicleComponent', () => {
  let component: DialogCubicleComponent;
  let fixture: ComponentFixture<DialogCubicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCubicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCubicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
