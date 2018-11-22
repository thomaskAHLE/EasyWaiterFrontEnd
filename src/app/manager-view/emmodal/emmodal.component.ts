import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-emmodal',
  templateUrl: './emmodal.component.html',
  styleUrls: ['./emmodal.component.css']
})
export class EMmodalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private modal: NgbModal) { }
  name : string;
  description: string;
  price: number;
  @ViewChild('itemName') itemName: ElementRef;
  @ViewChild('itemDescription') itemDesc: ElementRef;
  @ViewChild('itemPrice') itemPrice: ElementRef;
  ngOnInit() {
  }

  saveVal(){
    this.name = this.itemName.nativeElement.value;
    this.description = this.itemDesc.nativeElement.value;
    this.price = this.itemPrice.nativeElement.value;
    //You can store the above values in the database
    console.log(this.name);
    console.log(this.description);
    console.log(this.price);
    this.activeModal.dismiss();
  }


}
