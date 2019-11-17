import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistoryTransPageRoutingModule } from './history-trans-routing.module';

import { HistoryTransPage } from './history-trans.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistoryTransPageRoutingModule
  ],
  declarations: [HistoryTransPage]
})
export class HistoryTransPageModule {}
