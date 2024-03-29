import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // {
  //   path: 'folder/:id',
  //   loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  // },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'add-card',
    loadChildren: () => import('./add-card/add-card.module').then( m => m.AddCardPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'card-list',
    loadChildren: () => import('./card-list/card-list.module').then( m => m.CardListPageModule)
  },
  {
    path: 'add-manual-card',
    loadChildren: () => import('./add-manual-card/add-manual-card.module').then( m => m.AddManualCardPageModule)
  },
  {
    path: 'card-view/:id/:card',
    loadChildren: () => import('./card-view/card-view.module').then( m => m.CardViewPageModule)
  },
  {
    path: 'edit-card/:id',
    loadChildren: () => import('./edit-card/edit-card.module').then( m => m.EditCardPageModule)
  },
  {
    path: 'card-download/:id/:card',
    loadChildren: () => import('./card-download/card-download.module').then( m => m.CardDownloadPageModule)
  },
  {
    path: 'shared-card-view/:id/:card',
    loadChildren: () => import('./shared-card-view/shared-card-view.module').then( m => m.SharedCardViewPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
