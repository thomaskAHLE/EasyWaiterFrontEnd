import { Component, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/services/menu.service';
import {FoodModel} from '../../models/food-model';

@Component({
  selector: 'app-rm-item-modal',
  templateUrl: './rm-item-modal.component.html',
  styleUrls: ['./rm-item-modal.component.css']
})
export class RmItemModalComponent  {
  @Input()
  food:FoodModel;

  /* constructor:
   * @param activeModal: injected to dismiss modal
   * @param menuService: injected to remove items from menu
   */
  constructor(public activeModal: NgbActiveModal, private menuService: MenuService) { }

  /* OnRemove:
   * uses menuService to remove menu item from database
   * dismisses modal
   */
  onRemove(){
    this.menuService.removeMenuItem(this.food);
    this.activeModal.dismiss();
  }

}
