import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.page.html',
  styleUrls: ['./cadastrar.page.scss'],
})
export class CadastrarPage {
  nome: string = '';
  email: string = '';
  senha: string = '';
  confirmarSenha: string = '';

  constructor(private http: HttpClient,
              private navCtrl: NavController,
              private toastCtrl: ToastController) {}

  registrar() {
    if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }

    if (this.senha !== this.confirmarSenha) {
      this.presentToast('As senhas não coincidem.');
      return;
    }

    this.http.post('http://localhost:3000/user/register', { nome: this.nome, email: this.email, senha: this.senha })
      .subscribe({
        next: (response) => {
          console.log('Resposta do servidor:', response);
          this.presentToast('Cadastro realizado com sucesso!');
          console.log('Navegando para /informacoes-pessoais');

        },
        error: (error) => {
          this.presentToast('Erro no cadastro.');
          console.error(error);
        }
      });
  }

  avancar() {if (!this.nome || !this.email || !this.senha || !this.confirmarSenha) {
    this.presentToast('Por favor, preencha todos os campos.');
    return;
  }

    if (this.senha !== this.confirmarSenha) {
      this.presentToast('As senhas não coincidem.');
      return;
    }
  }

  cancelar() {
    this.navCtrl.navigateBack('/home');
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
}
