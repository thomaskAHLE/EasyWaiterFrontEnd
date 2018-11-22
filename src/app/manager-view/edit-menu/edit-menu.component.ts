import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import {MenuModel} from '../../models/menu-model';
import { TableModel } from 'src/app/models/table-model';
import {FoodModel, FOOD_CATEGORY} from '../../models/food-model';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {AfterViewInit, ViewChild, ElementRef} from '@angular/core'


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

  constructor(private _menuService: MenuService, private modalService: NgbModal) { 
  }

  

  ngOnInit( ) {
    this._menuService.getOrderObservable().subscribe((menuItems:FoodModel[])=>{
      this.menuApps = menuItems.filter(f => f.category == FOOD_CATEGORY.APPETIZER);
      this.menuSides = menuItems.filter(f => f.category == FOOD_CATEGORY.SIDE);
      this.menuEntrees = menuItems.filter(f => f.category == FOOD_CATEGORY.ENTREE);
      this.menuDesserts = menuItems.filter(f => f.category == FOOD_CATEGORY.DESSERT);
  });
  }

  ngAfterViewInit() {
    console.log(this.nameval);
}

  closeResult: string;
  

  open(content, foodItem) {
    this.modalReference = this.modalService.open(content);
    const modalRef = this.modalService.open(EditMenuComponent);
    modalRef.componentInstance.id = 10;
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    //this.modalReference.componentInstance = 10;
    //console.log(content.elementRef.nativeElement.ownerDocument.all[105]);
    //this.input.nativeElement.value = foodItem.name;
    
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  closeModal(){
    this.modalReference.close();
  }

  openA(content) {
    this.modalReference = this.modalService.open(content);
    this.modalReference.result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });

    console.log("Kappa");
  }


}
