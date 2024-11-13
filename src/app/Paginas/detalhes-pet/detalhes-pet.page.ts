import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalhes-pet',
  templateUrl: './detalhes-pet.page.html',
  styleUrls: ['./detalhes-pet.page.scss'],
})
export class DetalhesPetPage implements OnInit {
  pet: any;

  constructor(private route: ActivatedRoute,
              private http: HttpClient,
              private navCtrl: NavController
              ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let petId = params.get('id');
      this.http.get(`http://localhost:3000/api/pets/${petId}`).subscribe(data => {
        this.pet = data;
        // Ajustar o caminho da imagem
        if (this.pet.foto) {
          this.pet.foto = `http://localhost:3000/${this.pet.foto}`;
        }
      });
    });
  }

  confirmarAdocao() {
    // Lógica para confirmar adoção
    console.log('Adoção confirmada para o pet:', this.pet.nome);
  }

  cancelarAdocao() {
    this.navCtrl.navigateBack('/buscar');
  }
}
