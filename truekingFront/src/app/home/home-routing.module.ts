import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'user',
        loadChildren: () => import('../tabs/user/user.module').then(m => m.UserPageModule)
      },
      {
        path: 'main',
        loadChildren: () => import('../tabs/main/main.module').then(m => m.MainPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../tabs/search/search.module').then(m => m.SearchPageModule)
      },
      {
        path: '',
        redirectTo: '/home/main',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
