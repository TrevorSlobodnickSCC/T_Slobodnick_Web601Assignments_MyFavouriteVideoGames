import { TestBed } from '@angular/core/testing';

import { MyFavoriteVideoGamesService } from './my-favorite-video-games.service';

describe('MyFavoriteVideoGamesService', () => {
  let service: MyFavoriteVideoGamesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyFavoriteVideoGamesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
