import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Importe o HttpClient
import { Router } from '@angular/router';
import {AlertController, ToastController, NavController} from '@ionic/angular'; // Importe o AlertController e o ToastController

@Component({
  selector: 'app-informacoes-pessoais',
  templateUrl: './informacoes-pessoais.page.html',
  styleUrls: ['./informacoes-pessoais.page.scss'],
})
export class InformacoesPessoaisPage implements OnInit, AfterViewInit {
  cep: string = '';
  endereco: string = '';
  numero: string = '';
  complemento: string = '';
  telefone: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertController: AlertController, // Injete o AlertController
    private toastCtrl: ToastController, // Injete o ToastController
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {}
  //   const telefoneInput = this.renderer.selectRootElement('ion-input[ngModel="telefone"]', true);
  //
  //   this.renderer.listen(telefoneInput, 'input', (event) => {
  //     const input = event.target;
  //     let value = input.value.replace(/\D/g, '');
  //     const length = value.length;
  //
  //     if (length <= 10) {
  //       value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  //     } else {
  //       value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  //     }
  //
  //     // Atualize o valor do input
  //     this.renderer.setProperty(input, 'value', value);
  //   });
  // }

  voltar() {
    this.navCtrl.navigateBack(['/cadastrar']); // Navega de volta para a página de cadastro
  }

  async registrar() {
    if (!this.cep || !this.endereco || !this.numero || !this.telefone) {
      this.presentToast('Por favor, preencha todos os campos.');
      return;
    }

    this.http.post('http://localhost:3000/api/userInfo', {
      cep: this.cep, endereco: this.endereco, numero: this.numero, complemento: this.complemento, telefone: this.telefone, userId: 'userID' // Substitua 'userID' pelo ID do usuário
    }).subscribe({
      next: (response) => {
        this.presentToast('Informações registradas com sucesso!');
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.presentToast('Erro ao registrar informações.');
        console.error(error);
      }
    });
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
