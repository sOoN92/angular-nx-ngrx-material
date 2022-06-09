import { TestBed } from '@angular/core/testing';

import { CatsInterceptor } from './cats.interceptor';

describe('CatsInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CatsInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CatsInterceptor = TestBed.inject(CatsInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
