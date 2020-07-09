import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManualCardPageRoutingModule } from './add-manual-card-routing.module';

import { AddManualCardPage } from './add-manual-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddManualCardPageRoutingModule
  ],
  declarations: [AddManualCardPage]
})
export class AddManualCardPageModule {}
