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

  /* constuctor
   * @param authenticationService: injected to authenticate user
   * @param router: used for routing to correct page upon successful login
   * @param fb: used to build login form
  */
  constructor(public authenticationService: AuthenticationService,
              private router: Router, private fb: FormBuilder ) { }

  /* ngOnInit()
   * if user is already logged in routes to page 
   * otherwise builds loginForm
  */           
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

  /* signInEmail():gets email and password from login form and attempts to login through authentication service
   * otherwise builds calls afterSignIn when done
  */
  async signInEmail() 
  {
    this.authenticationService.login(this.loginForm.value['email'], this.loginForm.value['password']);
    return await this.afterSignIn();
  }

  /* aftersignIn():subscribes to authentication service user 
   * user is not null routes to correct user page
  */
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
