import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getCurrentUserAction } from 'src/app/auth/store/actions/getCurrentUser.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  title = 'Medium Clone';

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(getCurrentUserAction());
  }
}
