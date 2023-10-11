import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tugas1Page } from './tugas1.page';

const routes: Routes = [
  {
    path: '',
    component: Tugas1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tugas1PageRoutingModule {}
