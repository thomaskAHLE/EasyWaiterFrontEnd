import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-waiter',
  templateUrl: './add-waiter.component.html',
  styleUrls: ['./add-waiter.component.css']
})
export class AddWaiterComponent implements OnInit {
  waiterlist: string[] = ['Waiter 1', 'Waiter 2', 'Waiter 3', 'Waiter 4'];
  constructor() { }

  ngOnInit() {
  }

}
