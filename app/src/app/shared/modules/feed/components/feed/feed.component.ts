import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getFeedAction } from 'src/app/shared/modules/feed/store/actions/getFeed.action';
import {
  errorSelector,
  feedSelector,
  isLoadingSelector,
} from 'src/app/shared/modules/feed/store/selectors';
import { IGetFeedResponse } from 'src/app/shared/modules/feed/types/getFeedResponse.interface';

@Component({
  selector: 'mc-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps: string = '';

  isLoading$: Observable<boolean> = this.store.pipe(select(isLoadingSelector));
  error$: Observable<string | null> = this.store.pipe(select(errorSelector));
  feed$: Observable<IGetFeedResponse | null> = this.store.pipe(
    select(feedSelector)
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({ url: this.apiUrlProps }));
  }
}
