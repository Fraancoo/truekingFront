import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'user',
    loadChildren: () => import('./tabs/user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./tabs/main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./tabs/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./trade/information/information.module').then( m => m.InformationPageModule)
  },
  {
    path: 'tradding',
    loadChildren: () => import('./trade/tradding/tradding.module').then( m => m.TraddingPageModule)
  },
  {
    path: 'request/:id',
    loadChildren: () => import('./trade/request/request.module').then( m => m.RequestPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./account/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register1',
    loadChildren: () => import('./account/register1/register1.module').then( m => m.Register1PageModule)
  },
  {
    path: 'register2',
    loadChildren: () => import('./account/register2/register2.module').then( m => m.Register2PageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./item/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'edit',
    loadChildren: () => import('./item/edit/edit.module').then( m => m.EditPageModule)
  },
  {
    path: 'view',
    loadChildren: () => import('./item/view/view.module').then( m => m.ViewPageModule)
  },
  {
    path: 'offers',
    loadChildren: () => import('./notifications/offers/offers.module').then( m => m.OffersPageModule)
  },
  {
    path: 'offer',
    loadChildren: () => import('./notifications/offer/offer.module').then( m => m.OfferPageModule)
  },
  {
    path: 'information',
    loadChildren: () => import('./notifications/information/information.module').then( m => m.InformationPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
