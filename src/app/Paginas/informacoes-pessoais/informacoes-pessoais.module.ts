import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InformacoesPessoaisPageRoutingModule } from './informacoes-pessoais-routing.module';

import { InformacoesPessoaisPage } from './informacoes-pessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InformacoesPessoaisPageRoutingModule
  ],
  declarations: [InformacoesPessoaisPage]
})
export class InformacoesPessoaisPageModule {}
