import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-adocoes',
  templateUrl: './adocoes.page.html',
  styleUrls: ['./adocoes.page.scss'],
})
export class AdocoesPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  bemvindo() {
    this.navCtrl.navigateForward('/bemvindo');
  }

  buscar() {
    this.navCtrl.navigateForward('/buscar');
}

  perfil() {
    this.navCtrl.navigateForward('/perfil');
  }

  adocoes() {
    this.navCtrl.navigateForward('/adocoes');
  }
}

