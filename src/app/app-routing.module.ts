import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },

  {
    path: 'cadastrar',
    loadChildren: () => import('./Paginas/cadastrar/cadastrar.module').then( m => m.CadastrarPageModule)
  },
  {
    path: 'informacoes-pessoais',
    loadChildren: () => import('./Paginas/informacoes-pessoais/informacoes-pessoais.module').then( m => m.InformacoesPessoaisPageModule)
  },
  {
    path: 'bemvindo',
    loadChildren: () => import('./Paginas/bemvindo/bemvindo.module').then( m => m.BemvindoPageModule)
  },
  {
    path: 'cadastrarpet',
    loadChildren: () => import('./Paginas/cadastrarpet/cadastrarpet.module').then( m => m.CadastrarpetPageModule)
  },
  {
    path: 'adocoes',
    loadChildren: () => import('./Paginas/adocoes/adocoes.module').then( m => m.AdocoesPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./Paginas/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'buscar',
    loadChildren: () => import('./Paginas/buscar/buscar.module').then( m => m.BuscarPageModule)
  },
  {
    path: 'detalhes-pet/:id',
    loadChildren: () => import('./Paginas/detalhes-pet/detalhes-pet.module').then( m => m.DetalhesPetPageModule)
  },







];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
