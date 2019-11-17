import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistoryTransPage } from './history-trans.page';

const routes: Routes = [
  {
    path: '',
    component: HistoryTransPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistoryTransPageRoutingModule {}
