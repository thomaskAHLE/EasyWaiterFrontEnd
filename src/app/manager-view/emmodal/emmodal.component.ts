import { Component, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import  {FoodModel} from '../../models/food-model';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-emmodal',
  templateUrl: './emmodal.component.html',
  styleUrls: ['./emmodal.component.css']
})
export class EMmodalComponent  {

  @Input()
  food:FoodModel;
  @Input()
  emModalType:number;
  /* constuctor
   * @param activeModal: used to dismiss modal
   * @param menuService: used to updateItem or AddItem to menu
   */
  constructor(public activeModal: NgbActiveModal, private menuService: MenuService) { }
  



/* updateMenuItem
   * if emModalTyep is edit  uses menuService to updateMenuItem
   * if emModalTyep is add uses menuService to add item to menu
   * dismisses active modal
 */
  updateMenuItem(){
      if(this.emModalType ==0)
      {
      this.menuService.updateMenuItem(this.food);
      }
      else {
        this.menuService.addToMenu(this.food);
      }
    this.activeModal.dismiss();
  }


}
