import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { loginAction } from 'src/app/auth/store/actions/login.action';
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors';
import { ILoginRequest } from 'src/app/auth/types/loginRequest.interface';
import { IBackendErrors } from 'src/app/shared/types/backendErrors.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<IBackendErrors | null>;
  form: FormGroup = this.fb.group({
    email: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const request: ILoginRequest = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
