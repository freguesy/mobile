import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tipo2PageRoutingModule } from './tipo2-routing.module';

import { Tipo2Page } from './tipo2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tipo2PageRoutingModule
  ],
  declarations: [Tipo2Page]
})
export class Tipo2PageModule {}
