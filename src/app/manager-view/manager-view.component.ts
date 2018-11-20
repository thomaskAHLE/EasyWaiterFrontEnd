import { Component, OnInit } from '@angular/core';
export enum OPEN_TAB { ADDWA, ASSTA, CREATERE, EDITMEN };

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.css']
})
export class ManagerViewComponent implements OnInit {

  openTab: OPEN_TAB;
  OpenTab = OPEN_TAB;
  constructor() {
    this.openTab = OPEN_TAB.ASSTA;
   }

  ngOnInit() {
  }

}
