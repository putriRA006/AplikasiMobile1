import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToatsPageRoutingModule } from './toast-routing.module';

import { ToatsPage } from './toast.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToatsPageRoutingModule
  ],
  declarations: [ToatsPage]
})
export class ToatsPageModule {}
