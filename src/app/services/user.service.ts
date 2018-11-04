import { Injectable } from '@angular/core';
import { UserModel, USER_TYPE } from '../models/user-model';

export const waiterData: UserModel[] = [{
  userName: 'thill1',
  userPassword: 'password',
  userEmail: 'thomas@easywaiter.com',
  userType: USER_TYPE.WAITER
},
{
  userName: 'kahle2',
  userPassword: 'password2',
  userEmail: 'kahle2@easywaiter.com',
  userType: USER_TYPE.WAITER
}];


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: UserModel = waiterData[0];
  //might call database on initialization
  getCurrentUser(): UserModel {
    return this.user;
  }
  constructor() { }

}
