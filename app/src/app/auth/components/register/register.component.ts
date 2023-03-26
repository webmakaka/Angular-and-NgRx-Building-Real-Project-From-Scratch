import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';
import { IRegisterRequest } from 'src/app/auth/types/registerRequest.interface';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  isSubmitting$: Observable<boolean>;
  form: FormGroup = this.fb.group({
    username: '',
    email: '',
    password: '',
  });

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private authService: AuthService
  ) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    const request: IRegisterRequest = {
      user: this.form.value,
    };
    this.store.dispatch(registerAction({ request }));
  }
}
