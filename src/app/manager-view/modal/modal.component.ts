import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {AfterViewInit, ViewChild, ElementRef} from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @ViewChild('mytag') mytag: ElementRef;
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.mytag.nativeElement.value = "Text";
  }

  ngAfterInit(){
    
  }

}
