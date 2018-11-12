import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DragAndDropModule } from 'angular-draggable-droppable';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { WaiterViewComponent } from './waiter-view/waiter-view.component';
import { KitchenViewComponent } from './kitchen-view/kitchen-view.component';
import { ManagerViewComponent } from './manager-view/manager-view.component';
import { MenuTabComponent } from './waiter-view/table-view-tabs/menu-tab/menu-tab.component';
import { PendingTabComponent } from './waiter-view/table-view-tabs/pending-tab/pending-tab.component';
import { OrderedTabComponent } from './waiter-view/table-view-tabs/ordered-tab/ordered-tab.component';
import { TableViewComponent } from './waiter-view/table-view/table-view.component';
import { LoginComponent } from './login/login.component';

const appRoute: Routes = [
  {path: 'waiter-view', component: WaiterViewComponent},
  {path: 'table-view/:id', component: TableViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kitchen-view',component: KitchenViewComponent},
  {path: '', redirectTo: '/login', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    WaiterViewComponent,
    KitchenViewComponent,
    ManagerViewComponent,
    MenuTabComponent,
    PendingTabComponent,
    OrderedTabComponent,
    TableViewComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragAndDropModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoute,
      { enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
