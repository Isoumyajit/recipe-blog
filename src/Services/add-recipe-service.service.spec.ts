import { TestBed } from '@angular/core/testing';

import { AddRecipeServiceService } from './add-recipe-service.service';

describe('AddRecipeServiceService', () => {
  let service: AddRecipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddRecipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
