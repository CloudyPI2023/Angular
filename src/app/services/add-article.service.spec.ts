import { TestBed } from '@angular/core/testing';

import { AddArticle } from './add-article.service';

describe('AddArticle', () => {
  let service: AddArticle;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddArticle);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
