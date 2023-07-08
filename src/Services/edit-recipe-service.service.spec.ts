import { TestBed } from '@angular/core/testing';

import { EditRecipeServiceService } from './edit-recipe-service.service';

describe('EditRecipeServiceService', () => {
  let service: EditRecipeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditRecipeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
