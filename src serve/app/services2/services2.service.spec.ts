import { TestBed } from '@angular/core/testing';

import { Services2Service } from './services2.service';

describe('Services2Service', () => {
  let service: Services2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Services2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
