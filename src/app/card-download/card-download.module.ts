import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardDownloadPageRoutingModule } from './card-download-routing.module';

import { CardDownloadPage } from './card-download.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardDownloadPageRoutingModule
  ],
  declarations: [CardDownloadPage]
})
export class CardDownloadPageModule {}
