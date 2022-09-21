import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detalhes2PageRoutingModule } from './detalhes2-routing.module';

import { Detalhes2Page } from './detalhes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detalhes2PageRoutingModule
  ],
  declarations: [Detalhes2Page]
})
export class Detalhes2PageModule {}
