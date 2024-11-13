import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarpetPage } from './cadastrarpet.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarpetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarpetPageRoutingModule {}
