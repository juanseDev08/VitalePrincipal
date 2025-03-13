import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AbdColombiaRoutingModule } from './abd-colombia-routing.module';
import { AbdColombiaComponent } from './abd-colombia.component';


@NgModule({
  declarations: [
    AbdColombiaComponent
  ],
  imports: [
    CommonModule,
    AbdColombiaRoutingModule
  ]
})
export class AbdColombiaModule { }
