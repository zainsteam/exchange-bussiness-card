import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManualCardPageRoutingModule } from './add-manual-card-routing.module';

import { AddManualCardPage } from './add-manual-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddManualCardPageRoutingModule
  ],
  declarations: [AddManualCardPage]
})
export class AddManualCardPageModule {}
