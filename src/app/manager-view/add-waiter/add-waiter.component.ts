import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-add-waiter',
  templateUrl: './add-waiter.component.html',
  styleUrls: ['./add-waiter.component.css']
})
export class AddWaiterComponent implements OnInit {
  waiterlist: string[] = ['Waiter 1', 'Waiter 2', 'Waiter 3', 'Waiter 4'];
  constructor(private modal: NgbModal) { }

  ngOnInit() {
  }

  onClick() {
    this.modal.open(ModalComponent);
  }

}
