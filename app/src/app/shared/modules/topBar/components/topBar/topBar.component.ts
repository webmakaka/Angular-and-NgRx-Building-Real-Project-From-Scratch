import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  currentUserSelector,
  isAnonymousSelector,
  isLoggedInSelector,
} from 'src/app/auth/store/selectors';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';

@Component({
  selector: 'mc-topBar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent {
  isLoggedIn$: Observable<boolean> = this.store.pipe(
    select(isLoggedInSelector)
  );
  isAnonymous$: Observable<boolean> = this.store.pipe(
    select(isAnonymousSelector)
  );
  currentUser$: Observable<CurrentUserInterface | null> = this.store.pipe(
    select(currentUserSelector)
  );

  constructor(private store: Store) {}
}
