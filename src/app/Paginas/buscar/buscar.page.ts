import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.page.html',
  styleUrls: ['./buscar.page.scss'],
})
export class BuscarPage implements OnInit {
  pets: any[] = [];
  searchTerm: string = '';
  searchLocation: string = '';

  constructor(public navCtrl: NavController,
              private http: HttpClient) { }

  ngOnInit() {
    this.loadAllPets(); // Carrega todos os pets quando a página é inicializada
  }

  searchPets() {
    const params = {
      name: this.searchTerm,
      location: this.searchLocation
    };
    this.http.get('http://localhost:3000/api/pets/searchPets', { params })
      .subscribe((results: any) => {
        this.pets = results;
      }, error => {
        console.error('Erro ao buscar pets:', error);
      });
  }

  private loadAllPets() {
    this.http.get('http://localhost:3000/api/pets/all')
      .subscribe((data: any) => {
        this.pets = data;
        console.log('Pets carregados:', this.pets); // Verifique no console do navegador
      }, error => {
        console.error('Erro ao carregar todos os pets:', error);
      });
  }


  bemvindo() {
    this.navCtrl.navigateForward('/bemvindo');
  }

  adocoes() {
    this.navCtrl.navigateForward('/adocoes');
  }

  buscar() {
    this.navCtrl.navigateForward('/buscar');
  }

  perfil() {
    this.navCtrl.navigateForward('/perfil');
  }

  solicitarAdocao(petId: string) {
    console.log('Navegando para detalhes do pet com ID:', petId);
    this.navCtrl.navigateForward(`/detalhes-pet/${petId}`);
  }

}
