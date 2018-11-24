import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ViewChild, ElementRef} from '@angular/core';
import  {FoodModel, FOOD_CATEGORY} from '../../models/food-model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-emmodal',
  templateUrl: './emmodal.component.html',
  styleUrls: ['./emmodal.component.css']
})
export class EMmodalComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal, private modal: NgbModal, private _menuService: MenuService) { }
  @Input()
  food:FoodModel;
  @Input()
  emModalType:number;

  ngOnInit() {
  }

  saveVal(){
      console.log(this.food);
      if(this.emModalType ==0)
      {
      this._menuService.updateMenuItem(this.food);
      }
      else {
        this._menuService.addToMenu(this.food);
      }
    
    
    this.activeModal.dismiss();
  }


}
