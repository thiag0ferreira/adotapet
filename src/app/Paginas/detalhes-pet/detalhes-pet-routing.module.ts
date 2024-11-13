import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesPetPage } from './detalhes-pet.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesPetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesPetPageRoutingModule {}
