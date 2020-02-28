import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PendingAddPage } from './pending-add.page';

const routes: Routes = [
  {
    path: '',
    component: PendingAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PendingAddPageRoutingModule {}
