import { TestBed, inject } from '@angular/core/testing';

import { InsertNewService } from './insert-new.service';

describe('InsertNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertNewService]
    });
  });

  it('should be created', inject([InsertNewService], (service: InsertNewService) => {
    expect(service).toBeTruthy();
  }));
});
