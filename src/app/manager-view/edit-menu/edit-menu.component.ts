import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import {MenuModel} from '../../models/menu-model';
import { TableModel } from 'src/app/models/table-model';
import {FoodModel, FOOD_CATEGORY} from '../../models/food-model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import { EMmodalComponent } from '../emmodal/emmodal.component';


@Component({
  selector: 'app-edit-menu',
  templateUrl: './edit-menu.component.html',
  styleUrls: ['./edit-menu.component.css']
})
export class EditMenuComponent implements OnInit {

  @ViewChild('ipt') nameval: ElementRef;
  modalReference: any;
  table: TableModel;
  menuApps: FoodModel[] = [];
  menuSides:FoodModel[] = [];
  menuEntrees:FoodModel[]=[];
  menuDesserts:FoodModel[]=[];
  menu: MenuModel;

  constructor(private _menuService: MenuService, private modal: NgbModal) { 
  }

  

  ngOnInit( ) {
    this._menuService.getOrderObservable().subscribe((menuItems:FoodModel[])=>{
      this.menuApps = menuItems.filter(f => f.category == FOOD_CATEGORY.APPETIZER);
      this.menuSides = menuItems.filter(f => f.category == FOOD_CATEGORY.SIDE);
      this.menuEntrees = menuItems.filter(f => f.category == FOOD_CATEGORY.ENTREE);
      this.menuDesserts = menuItems.filter(f => f.category == FOOD_CATEGORY.DESSERT);
  });
  }
  onClick(foodItem) {
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.name = foodItem.name;
    modalRef.componentInstance.description = foodItem.description;
    modalRef.componentInstance.price = foodItem.price;
  }


}
