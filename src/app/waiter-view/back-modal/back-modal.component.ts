import { Component } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-modal',
  templateUrl: './back-modal.component.html',
  styleUrls: ['./back-modal.component.css']
})
export class BackModalComponent  {

  /* constructor 
   * @param activeModal: injected to dismiss modal when done
   * @param router: injected to route back to waiterview 
  */
  constructor(public activeModal: NgbActiveModal, private router: Router) { }

  /* goBack()
   * routes back to waiterview
   * dismisses model
  */
  goBack(){
    this.router.navigate(['waiter-view']);
    this.activeModal.dismiss();
  }

}
