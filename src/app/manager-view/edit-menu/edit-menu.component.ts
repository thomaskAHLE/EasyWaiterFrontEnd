import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import {MenuModel} from '../../models/menu-model';
import { TableModel } from 'src/app/models/table-model';
import {FoodModel, FOOD_CATEGORY} from '../../models/food-model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { EMmodalComponent } from '../emmodal/emmodal.component';
import { NgModuleRef } from '@angular/core/src/render3';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  @ViewChild('ipt') nameval: ElementRef;
  modalReference: any;
  
  @Input()
  menuApps: FoodModel[] = [];
  @Input()
  menuSides:FoodModel[] = [];
  @Input()
  menuEntrees:FoodModel[]=[];
  @Input()
  menuDesserts:FoodModel[]=[];
  

  constructor(private _menuService: MenuService, private modal: NgbModal) { 
  }

  

  ngOnInit( ) {

  }
  onAddMenuItem() {
    let food:FoodModel = new FoodModel("",0,0,"");
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.food = food;
    modalRef.componentInstance.emModalType = 1;
  }
  
  onRemoveMenuItem(foodItem:FoodModel)
  {
    this._menuService.removeMenuItem(foodItem);
  }

  onEditMenuItem(foodItem:FoodModel)
  {
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.food = foodItem;
    modalRef.componentInstance.emModalType = 0;
  }

}
