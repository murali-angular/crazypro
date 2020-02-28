import { Forms1RoutingModule } from './forms1-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-forms/reactive-forms.component';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [ReactiveFormComponent,
               TemplateDrivenFormsComponent
  ],
  imports: [
    CommonModule,
    Forms1RoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class Forms1Module { }
