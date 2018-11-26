import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import {MenuModel} from '../../models/menu-model';
import { TableModel } from 'src/app/models/table-model';
import {FoodModel, FOOD_CATEGORY} from '../../models/food-model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { EMmodalComponent } from '../emmodal/emmodal.component';
import { NgModuleRef } from '@angular/core/src/render3';
import { RmItemModalComponent } from '../rm-item-modal/rm-item-modal.component';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent{

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

  onAddMenuItem() {
    let food:FoodModel = new FoodModel("",0,0,"");
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.food = food;
    modalRef.componentInstance.emModalType = 1;
  }
  
  onRemoveMenuItem(foodItem:FoodModel)
  {
    const modalRef = this.modal.open(RmItemModalComponent);
    modalRef.componentInstance.food = foodItem;
    //this._menuService.removeMenuItem(foodItem);
  }

  onEditMenuItem(foodItem:FoodModel)
  {
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.food = foodItem;
    modalRef.componentInstance.emModalType = 0;
  }

}
