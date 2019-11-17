import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListPageModule)
  },
  {
    path: 'pv',
    loadChildren: () => import('./pages/pv/pv.module').then( m => m.PvPageModule)
  },
  {
    path: 'customers',
    loadChildren: () => import('./pages/customers/customers.module').then( m => m.CustomersPageModule)
  },
  {
    path: 'artists',
    loadChildren: () => import('./pages/artists/artists.module').then( m => m.ArtistsPageModule)
  },
  {
    path: 'history-trans',
    loadChildren: () => import('./pages/history-trans/history-trans.module').then( m => m.HistoryTransPageModule)
  },
  {
    path: 'works',
    loadChildren: () => import('./pages/works/works.module').then( m => m.WorksPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
