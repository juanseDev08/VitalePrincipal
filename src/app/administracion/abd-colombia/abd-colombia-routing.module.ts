import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbdColombiaComponent } from './abd-colombia.component';

const routes: Routes = [{ path: '', component: AbdColombiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbdColombiaRoutingModule { }
