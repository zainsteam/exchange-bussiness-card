import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardDownloadPage } from './card-download.page';

const routes: Routes = [
  {
    path: '',
    component: CardDownloadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardDownloadPageRoutingModule {}
