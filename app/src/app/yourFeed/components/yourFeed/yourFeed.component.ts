import { Component } from '@angular/core';

@Component({
  selector: 'mc-your-feed',
  templateUrl: './yourFeed.component.html',
  styleUrls: ['./yourFeed.component.scss'],
})
export class YourFeedComponent {
  apiUrl = '/articles/feed';
}
