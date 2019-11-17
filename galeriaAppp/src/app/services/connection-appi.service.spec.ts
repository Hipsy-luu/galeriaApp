import { TestBed } from '@angular/core/testing';

import { ConnectionAppiService } from './connection-appi.service';

describe('ConnectionAppiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConnectionAppiService = TestBed.get(ConnectionAppiService);
    expect(service).toBeTruthy();
  });
});
