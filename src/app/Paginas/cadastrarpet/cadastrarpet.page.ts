import { Component } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrarpet',
  templateUrl: './cadastrarpet.page.html',
  styleUrls: ['./cadastrarpet.page.scss'],
})
export class CadastrarpetPage {
  ages: number[] = Array.from({ length: 21 }, (_, i) => i);
  weight: string[] = [
    '1kg a 5kg',
    '6kg a 10kg',
    '11kg a 15kg',
    '16kg a 20kg',
    '21kg a 25kg',
    '26kg a 30kg',
    '31kg a 35kg',
    '36kg a 40kg',
    '41kg a 45kg',
    '46kg a 50kg',
    'Mais de 50Kg'
  ];

  petData: any = {
    nome: '',
    localizacao: '',
    especie: '',
    idadeEstimada: 0,
    peso: '',
    porte: '',
    raca: '',
    sexo: '',
    cor: '',
    tipoPelo: '',
    necessidadesEspeciais: false,
    descricaoNecessidades: '',
    castrado: false,
    vermifugado: false,
    pedigree: false,
    vacinado: false,
    sobrePet: '',
    foto: ''
  };

  selectedFile: File | null = null;

  constructor(
    private navCtrl: NavController,
    private router: Router,
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      console.log('File selected:', file.name);
      this.selectedFile = file;
    } else {
      console.log('No file selected');
    }
  }

  cancelar() {
    this.navCtrl.navigateBack('/bemvindo');
  }

  async registerPet() {
    console.log('Método registerPet chamado');
    const formData = new FormData();
    for (const key in this.petData) {
      formData.append(key, this.petData[key]);
      console.log(`Adding key: ${key}, value: ${this.petData[key]}`);
    }

    if (this.selectedFile) {
      formData.append('foto', this.selectedFile);
      console.log('File appended:', this.selectedFile.name);
    } else {
      console.log('No file to append');
    }

    console.log('Enviando dados para o servidor');
    this.http.post('http://localhost:3000/api/pets/registerPet', formData, { responseType: 'text' })
      .subscribe(
        async response => {
          console.log('Resposta recebida:', response);
          const alert = await this.alertController.create({
            header: 'Sucesso',
            message: 'PET CADASTRADO COM SUCESSO!',
            buttons: ['Ok']
          });
          await alert.present();
          alert.onDidDismiss().then(() => {
            this.router.navigateByUrl('/bemvindo'); // Redireciona após o alerta ser fechado
          });
        },
        error => {
          console.error('Erro na requisição:', error);
          this.alertController.create({
            header: 'Erro',
            message: `Erro ao cadastrar pet. Por favor, tente novamente. Detalhes: ${error.message}`,
            buttons: ['Ok']
          }).then(alert => alert.present());
        }
      );
    console.log('Requisição iniciada');
  }
}
