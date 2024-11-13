import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarpetPageRoutingModule } from './cadastrarpet-routing.module';

import { CadastrarpetPage } from './cadastrarpet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarpetPageRoutingModule
  ],
  declarations: [CadastrarpetPage]
})
export class CadastrarpetPageModule {}
