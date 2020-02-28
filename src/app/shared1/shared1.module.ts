
import { CurrencyPipe } from './currency.pipe';
import { NumberonlyDirective } from './numberonly.directive';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NumberonlyDirective, CurrencyPipe],
  imports: [
    CommonModule
  ],
  exports: [NumberonlyDirective, CurrencyPipe]
})

export class Shared1Module { }
