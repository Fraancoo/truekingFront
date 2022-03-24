import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TraddingPage } from './tradding.page';

const routes: Routes = [
  {
    path: '',
    component: TraddingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TraddingPageRoutingModule {}
