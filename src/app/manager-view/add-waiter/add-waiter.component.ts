import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { UserService } from 'src/app/services/user.service';
import { UserModel, USER_TYPE } from 'src/app/models/user-model';

@Component({
  selector: 'app-add-waiter',
  templateUrl: './add-waiter.component.html',
  styleUrls: ['./add-waiter.component.css']
})
export class AddWaiterComponent implements OnInit {
  waiterList: UserModel[] = [];
  constructor(private modal: NgbModal, private userService: UserService) {
      this.userService.getUsers().subscribe((users:UserModel[])=> {this.waiterList = users.filter(u=> u.userType == USER_TYPE.WAITER)});
   }

  ngOnInit() {
  }

  onClick() {
    this.modal.open(ModalComponent);
  }

}
