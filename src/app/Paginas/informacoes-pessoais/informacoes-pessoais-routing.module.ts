import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InformacoesPessoaisPage } from './informacoes-pessoais.page';

const routes: Routes = [
  {
    path: '',
    component: InformacoesPessoaisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InformacoesPessoaisPageRoutingModule {}
