import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'pendings',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../pendings/pendings.module' ) .then( m => m .PendingsPageModule )
          },
          {
            path: 'add',
            loadChildren: () => import( '../pendings/pending-add/pending-add.module' ) .then( m => m .PendingAddPageModule )
          }
        ]
      },
      {
        path: 'finished',
        children: [
          {
            path: '',
            loadChildren: () =>
              import( '../finished/finished.module' ) .then( m => m .FinishedPageModule )
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/pendings',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/pendings',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
