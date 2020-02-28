import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PendingAddPageRoutingModule } from './pending-add-routing.module';

import { PendingAddPage } from './pending-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PendingAddPageRoutingModule
  ],
  declarations: [PendingAddPage]
})
export class PendingAddPageModule {}
