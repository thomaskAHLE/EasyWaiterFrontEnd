import { Component, Input } from '@angular/core';
import {FoodModel} from '../../models/food-model';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { EMmodalComponent } from '../emmodal/emmodal.component';
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
  
 /* constructor: 
  * @param modal: injects modal for use when editing adding or removing a menu item
  */ 
  constructor(private modal: NgbModal) { 
  }

  /* onAddMenuItem 
  * creates new foodModel
  * opens EMmodal and passes in new foodModel and ModalType =AddItem as Input
  */ 
  onAddMenuItem() {
    let food:FoodModel = new FoodModel("",0,0,"");
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.food = food;
    modalRef.componentInstance.emModalType = 1;
  }
  
  /* onRemoveMenuItem 
  * @param foodToRemove: menuItem to remove
  * opens remove modal and passes in foodToRemove as input
  */ 
  onRemoveMenuItem(foodToRemove:FoodModel)
  {
    const modalRef = this.modal.open(RmItemModalComponent);
    modalRef.componentInstance.food = foodToRemove;
  }

  /* onRemoveMenuItem 
  * @param foodToEdit: menuItem to edit
  * opens edit modal and passes in foodToEdit and emModalType = EditItem as Input
  */ 
  onEditMenuItem(foodToEdit:FoodModel)
  {
    const modalRef = this.modal.open(EMmodalComponent);
    modalRef.componentInstance.food = foodToEdit;
    modalRef.componentInstance.emModalType = 0;
  }

}
