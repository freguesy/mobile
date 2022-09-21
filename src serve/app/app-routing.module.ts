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

     //Produtos
  
  {
    path: 'tipo',
    loadChildren: () => import('./pages/tipo/tipo.module').then( m => m.TipoPageModule)
  },
  {
    path: 'detalhes/:id',
    loadChildren: () => import('./pages/detalhes/detalhes.module').then( m => m.DetalhesPageModule)
  },
  {
    path: 'listagem',
    loadChildren: () => import('./pages/listagem/listagem.module').then( m => m.ListagemPageModule)
  },


      //Serviços
  {
    path: 'detalhes2/:id',
    loadChildren: () => import('./serviços/detalhes2/detalhes2.module').then( m => m.Detalhes2PageModule)
  },
  {
    path: 'listagem2',
    loadChildren: () => import('./serviços/listagem2/listagem2.module').then( m => m.Listagem2PageModule)
  },
  {
    path: 'tipo2',
    loadChildren: () => import('./serviços/tipo2/tipo2.module').then( m => m.Tipo2PageModule)
  },
  
    
  
    
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
