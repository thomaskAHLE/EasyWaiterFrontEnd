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

/*Not functional requires backend*/

export class AddWaiterComponent {
  @Input()
  waiterList: UserModel[];
  /* constructor
   * @param modal: add waiter modal
  */
  constructor(private modal: NgbModal) {
   }

  /* onClick()
   * opens add waiter Modal
  */
  onClick() {
    this.modal.open(ModalComponent);
  }

}
