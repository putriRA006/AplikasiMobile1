import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tugas1PageRoutingModule } from './tugas1-routing.module';

import { Tugas1Page } from './tugas1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tugas1PageRoutingModule
  ],
  declarations: [Tugas1Page]
})
export class Tugas1PageModule {}
