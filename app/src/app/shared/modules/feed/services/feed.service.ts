import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { constants } from 'src/app/constants';
import { IGetFeedResponse } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}
  getFeed(url: string): Observable<IGetFeedResponse> {
    const fullUrl = constants.apiUrl + url;
    return this.http.get<IGetFeedResponse>(fullUrl);
  }
}
