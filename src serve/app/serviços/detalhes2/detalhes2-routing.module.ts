import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detalhes2Page } from './detalhes2.page';

const routes: Routes = [
  {
    path: '',
    component: Detalhes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detalhes2PageRoutingModule {}
