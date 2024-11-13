import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesPetPageRoutingModule } from './detalhes-pet-routing.module';

import { DetalhesPetPage } from './detalhes-pet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesPetPageRoutingModule
  ],
  declarations: [DetalhesPetPage]
})
export class DetalhesPetPageModule {}
