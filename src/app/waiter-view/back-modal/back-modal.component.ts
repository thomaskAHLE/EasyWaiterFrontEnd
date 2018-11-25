import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-back-modal',
  templateUrl: './back-modal.component.html',
  styleUrls: ['./back-modal.component.css']
})
export class BackModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  goBack(){
    this.router.navigate(['waiter-view']);
    this.activeModal.dismiss();
  }

}
