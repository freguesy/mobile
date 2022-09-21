import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Listagem2Page } from './listagem2.page';

const routes: Routes = [
  {
    path: '',
    component: Listagem2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Listagem2PageRoutingModule {}
