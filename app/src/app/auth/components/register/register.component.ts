import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { registerAction } from 'src/app/auth/store/actions/register.action';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup = this.fb.group({
    username: '',
    email: '',
    password: '',
  });

  constructor(private fb: FormBuilder, private store: Store) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.form.value);
    this.store.dispatch(registerAction(this.form.value));
  }
}
