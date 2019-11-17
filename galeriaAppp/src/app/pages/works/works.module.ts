import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorksPageRoutingModule } from './works-routing.module';

import { WorksPage } from './works.page';
import { IonicSelectableModule } from 'ionic-selectable';
//import { ComponentsModule } from './../../components/components.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorksPageRoutingModule,
    //ComponentsModule,
    IonicSelectableModule
  ],
  declarations: [WorksPage]
})
export class WorksPageModule {}
