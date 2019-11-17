import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PvPageRoutingModule } from './pv-routing.module';

import { PvPage } from './pv.page';
import { IonicSelectableModule } from 'ionic-selectable';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PvPageRoutingModule,
    IonicSelectableModule
  ],
  declarations: [PvPage]
})
export class PvPageModule {}
