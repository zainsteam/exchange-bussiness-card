import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedCardViewPage } from './shared-card-view.page';

const routes: Routes = [
  {
    path: '',
    component: SharedCardViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedCardViewPageRoutingModule {}
