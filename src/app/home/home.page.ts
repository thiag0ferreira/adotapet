import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private toastCtrl: ToastController,
    private http: HttpClient
  ) {}

  async login() {
    if (!this.email || !this.password) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response: any = await this.http.post('http://localhost:3000/auth/login', {
        email: this.email,
        password: this.password
      }).toPromise();

      // Salvar o token e o email no localStorage
      localStorage.setItem('token', response.token);
      localStorage.setItem('email', this.email);

      this.presentToast('Login realizado com sucesso!');
      this.navCtrl.navigateForward('/bemvindo');
    } catch (error) {
      console.error(error);
      this.presentToast('Email ou senha inválidos.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
