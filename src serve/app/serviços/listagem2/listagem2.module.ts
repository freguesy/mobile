import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Listagem2PageRoutingModule } from './listagem2-routing.module';

import { Listagem2Page } from './listagem2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Listagem2PageRoutingModule
  ],
  declarations: [Listagem2Page]
})
export class Listagem2PageModule {}
