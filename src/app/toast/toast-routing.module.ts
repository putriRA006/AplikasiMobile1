import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToatsPage } from './toast.page';

const routes: Routes = [
  {
    path: '',
    component: ToatsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToatsPageRoutingModule {}
