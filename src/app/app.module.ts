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
import { AngularFireModule } from '@angular/fire';
import{AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AssignTablesComponent } from './manager-view/assign-tables/assign-tables.component';
import { CreateReportComponent } from './manager-view/create-report/create-report.component';
import { EditMenuComponent } from './manager-view/edit-menu/edit-menu.component';
import { AddWaiterComponent } from './manager-view/add-waiter/add-waiter.component';
import { ModalComponent } from './manager-view/modal/modal.component';
import { EMmodalComponent } from './manager-view/emmodal/emmodal.component';
import { ClrModalComponent } from './waiter-view/clr-modal/clr-modal.component';
import { BackModalComponent } from './waiter-view/back-modal/back-modal.component';


const appRoute: Routes = [
  {path: 'waiter-view', component: WaiterViewComponent},
  {path: 'table-view/:id', component: TableViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'kitchen-view',component: KitchenViewComponent},
  {path: 'manager-view', component: ManagerViewComponent},
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
    AssignTablesComponent,
    CreateReportComponent,
    EditMenuComponent,
    AddWaiterComponent,
    ModalComponent,
    EMmodalComponent,
    ClrModalComponent,
    BackModalComponent
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
    ,   
     AngularFireModule.initializeApp(environment.firebase)
    , AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  entryComponents: [
    ModalComponent,
    EMmodalComponent,
    ClrModalComponent,
    BackModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
