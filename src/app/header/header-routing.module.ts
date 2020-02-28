
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import {RouterModule, Routes} from '@angular/router';

const headerroutes: Routes = [
  {path: 'header', component: HeaderComponent},
  {path: 'student-create', component: StudentCreateComponent},
  {path: 'student-list',   component: StudentListComponent},
  {path: 'home', component: HomeComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(headerroutes),
  ],
  exports: [ RouterModule ]
})
export class HeaderRoutingModule { }
