import { Component, OnInit, Input } from '@angular/core';
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
  @Input()
  waiterList: UserModel[];
  constructor(private modal: NgbModal, private userService: UserService) {
   }

  ngOnInit() {
  }

  onClick() {
    this.modal.open(ModalComponent);
  }

}
