import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WaiterViewComponent } from './waiter-view/waiter-view.component';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';

@NgModule({
  declarations: [
    AppComponent,
    WaiterViewComponent,
    KitchenViewComponent,
    ManagerViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
