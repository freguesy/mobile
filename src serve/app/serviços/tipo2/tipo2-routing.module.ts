import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tipo2Page } from './tipo2.page';

const routes: Routes = [
  {
    path: '',
    component: Tipo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tipo2PageRoutingModule {}
