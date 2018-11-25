import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserModel } from '../models/user-model';
import {take} from 'rxjs/operators';
export enum OPEN_TAB { ADDWA, ASSTA, CREATERE, EDITMEN };

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit {

  openTab: OPEN_TAB;
  OpenTab = OPEN_TAB;
  manager: UserModel;
  constructor(private authService: AuthenticationService, private router:Router) {
    this.openTab = OPEN_TAB.ASSTA;
   }

  ngOnInit() {
    this.authService.user.pipe(take(1)).subscribe(user => {
      this.manager = user;
     });
  }

  logoutManager()
  {
    this.authService.logout();
    this.router.navigate(['login']);

  }
}
