import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedCardViewPageRoutingModule } from './shared-card-view-routing.module';

import { SharedCardViewPage } from './shared-card-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedCardViewPageRoutingModule
  ],
  declarations: [SharedCardViewPage]
})
export class SharedCardViewPageModule {}
