import { TestBed } from '@angular/core/testing';

import { ImagesFirebaseService } from './images-firebase.service';

describe('ImagesFirebaseService', () => {
  let service: ImagesFirebaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImagesFirebaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
