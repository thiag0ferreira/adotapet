import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-bemvindo',
  templateUrl: './bemvindo.page.html',
  styleUrls: ['./bemvindo.page.scss'],
})
export class BemvindoPage implements OnInit {

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  cadastrar() {
    this.navCtrl.navigateForward('/cadastrarpet');
  }

  perfil() {
    this.navCtrl.navigateForward('/perfil');
  }

  buscar() {
    this.navCtrl.navigateForward('/buscar');
  }

  bemvindo() {
    this.navCtrl.navigateForward('/bemvindo');
  }

  adocoes() {
    this.navCtrl.navigateForward('/adocoes');
  }
}

