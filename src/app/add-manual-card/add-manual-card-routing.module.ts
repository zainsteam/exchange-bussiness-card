import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddManualCardPage } from './add-manual-card.page';

const routes: Routes = [
  {
    path: '',
    component: AddManualCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManualCardPageRoutingModule {}
