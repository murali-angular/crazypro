import { HomeServiceService } from './home/home-service.service';
import { FormsModule } from '@angular/forms';
import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home/home.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    StudentListComponent,
    StudentCreateComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule,
    FormsModule
  ],
  providers: [HomeServiceService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class HeaderModule { }
