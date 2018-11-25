import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { USER_TYPE } from '../models/user-model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  email: string = '';
  password: string = '';
  constructor(public authenticationService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    if(this.authenticationService.user)
    {
      this.afterSignIn();
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }
  get f() { return this.loginForm.controls; }

  async signInEmail() {
    this.authenticationService.login(this.loginForm.value['email'], this.loginForm.value['password']);
    return await this.afterSignIn();
  }

  private afterSignIn() {
    this.authenticationService.user.subscribe(user => {
      if (user) {
        switch (user.userType) {
          case USER_TYPE.WAITER:
            this.router.navigate(['/waiter-view']);;
            break;
          case USER_TYPE.KITCHEN:
            this.router.navigate(['/kitchen-view']);;
            break;
          case USER_TYPE.MANAGER:
            this.router.navigate(['/manager-view']);;
            break;
          default:
            console.log('default')
            break;
        }
      }
    })
  }

}
