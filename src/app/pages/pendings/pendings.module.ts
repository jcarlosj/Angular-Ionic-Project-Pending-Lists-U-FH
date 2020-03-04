import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { PendingsPage } from './pendings.page';
import { PendingsPipe } from '../../pipes/pendings.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: PendingsPage }])
  ],
  declarations: [
    PendingsPage,
    PendingsPipe
  ]
})
export class PendingsPageModule {}
