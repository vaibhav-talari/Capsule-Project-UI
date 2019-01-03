import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { FilterPipeModule } from 'ngx-filter-pipe';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ViewComponent } from './shared/view/view.component';
import { AddTaskComponent } from './shared/add-task/add-task.component';
import { UpdateTaskComponent } from './shared/update-task/update-task.component';
import { IndexComponent } from './shared/index/index.component';

var navPaths:Routes=[
  {path:'',component:IndexComponent},
  {path:'addtask',component:AddTaskComponent},
  {path:'viewtask',component:ViewComponent},
  {path:'edittask/:childTaskID',component:UpdateTaskComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent,
    AddTaskComponent,
    UpdateTaskComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(navPaths),
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
