
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
import { ReactiveFormComponent } from './reactive-forms/reactive-forms.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'reactive-forms', component: ReactiveFormComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class Forms1RoutingModule { }
