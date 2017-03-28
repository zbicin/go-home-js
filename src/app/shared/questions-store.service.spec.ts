import { TestBed, inject } from '@angular/core/testing';

import { QuestionsStoreService } from './questions-store.service';

describe('QuestionsStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionsStoreService]
    });
  });

  it('should ...', inject([QuestionsStoreService], (service: QuestionsStoreService) => {
    expect(service).toBeTruthy();
  }));
});
