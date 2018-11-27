import { Component, OnInit } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ViewChild, ElementRef} from '@angular/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

/*Not functional yet*/

export class ModalComponent implements OnInit {
  @ViewChild('mytag') mytag: ElementRef;

  /* constuctor:
   * @param activeModal: used to dismiss modal
   */
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.mytag.nativeElement.value = "";
  }

}
