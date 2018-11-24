import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { USER_TYPE } from '../models/user-model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

type UserFields = 'usrEmail' | 'usrPassword';
type FormErrors = { [u in UserFields]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    usrEmail: ['', [
      Validators.required,
      Validators.email,
    ]],
    usrPassword: ['', [
      Validators.minLength(6),
      Validators.maxLength(25),
    ]]
  });
  userType: USER_TYPE;
  formErrors: FormErrors = {
    usrEmail: '',
    usrPassword: ''
  }
  validationMessages = {
    usrEmail: {
      'required': 'Email is required.',
      'email': 'Email must be a valid email',
    },
    usrPassword: {
      'required': 'Password is required.',
      'pattern': 'Password must be include at one letter and one number.',
      'minlength': 'Password must be at least 4 characters long.',
      'maxlength': 'Password cannot be more than 40 characters long.',
    },
  };
  constructor(public authenticationService: AuthenticationService, 
              private router: Router, 
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.loginForm.valueChanges.subscribe((data) => this.onValueChanged(data));
    this.onValueChanged();  
  }

  // Updates validation state on form changes.
  onValueChanged(data?: any) {
    console.log('value changed');
    console.log(data);
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      console.log('field: ' + field)
      if (Object.prototype.hasOwnProperty.call(this.formErrors, field) && (field === 'usrEmail' || field === 'usrPassword')) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          if (control.errors) {
            for (const key in control.errors) {
              if (Object.prototype.hasOwnProperty.call(control.errors, key)) {
                this.formErrors[field] += `${(messages as { [key: string]: string })[key]} `;
              }
            }
          }
        }
      }
    }
  }

  async signInEmail() {
    console.log('signinemail: ' + this.loginForm.value['usrEmail']);
    console.log('password: ' + this.loginForm.value['usrPassword']);
    console.log(this.loginForm)
    this.authenticationService.login(this.loginForm.value['usrEmail'], this.loginForm.value['usrPassword']);

    return await this.afterSignIn();
  }

  private afterSignIn() {
    let view: string = '/login';
    this.authenticationService.user.subscribe(u => {
      if (u.userType == USER_TYPE.WAITER) {
        view = '/waiter-view/';
      }
      else if (u.userType == USER_TYPE.KITCHEN) {
        view = '/kitchen-view/';
      }
      else if (u.userType == USER_TYPE.MANAGER) {
        view = '/manager-view/';
      }
    })
    return this.router.navigate([view]);
  }
}
