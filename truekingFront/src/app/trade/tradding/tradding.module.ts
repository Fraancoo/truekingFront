import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TraddingPageRoutingModule } from './tradding-routing.module';

import { TraddingPage } from './tradding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TraddingPageRoutingModule
  ],
  declarations: [TraddingPage]
})
export class TraddingPageModule {}
