import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { registerAction } from 'src/app/auth/store/actions/register.action';
import { isSubmittingSelector } from 'src/app/auth/store/selectors';

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

  constructor(private fb: FormBuilder, private store: Store) {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
  }

  ngOnInit(): void {}

  onSubmit(): void {
    this.store.dispatch(registerAction(this.form.value));
  }
}
