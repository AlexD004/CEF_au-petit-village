import { TestBed } from '@angular/core/testing';

import { ReseauxSociauxURLService } from './reseaux-sociaux-url.service';

describe('ReseauxSociauxURLService', () => {
  let service: ReseauxSociauxURLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReseauxSociauxURLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
