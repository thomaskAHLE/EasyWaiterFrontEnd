import { Component, OnInit, Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { MenuService } from 'src/app/services/menu.service';
import {FoodModel} from '../../models/food-model';

@Component({
  selector: 'app-rm-item-modal',
  templateUrl: './rm-item-modal.component.html',
  styleUrls: ['./rm-item-modal.component.css']
})
export class RmItemModalComponent implements OnInit {
  @Input()
  food:FoodModel;
  constructor(public activeModal: NgbActiveModal, private _menuService: MenuService) { }

  ngOnInit() {
  }

  onRemove(){
    this._menuService.removeMenuItem(this.food);
    this.activeModal.dismiss();
  }

}
