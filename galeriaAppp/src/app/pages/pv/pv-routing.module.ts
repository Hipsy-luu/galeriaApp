import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PvPage } from './pv.page';

const routes: Routes = [
  {
    path: '',
    component: PvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PvPageRoutingModule {}
