import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PendingsPage } from './pendings.page';
import { SharedModule } from '../../shared/shared.module';    // Modulo que comparte el uso del PendingPipe

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PendingsPage }]),
    SharedModule
  ],
  declarations: [
    PendingsPage
  ]
})
export class PendingsPageModule {}
