import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'produtos',
    pathMatch: 'full',
  },
  {
    path: 'produtos',
    loadChildren: () =>
      import('./produtos/produtos.module').then((m) => m.ProdutosPageModule),
  },
  {
    path: 'modal-edita-produto',
    loadChildren: () =>
      import('./modal-edita-produto/modal-edita-produto.module').then(
        (m) => m.ModalEditaProdutoPageModule
      ),
  },
  {
    path: 'modal-cadastro-produto',
    loadChildren: () =>
      import('./modal-cadastro-produto/modal-cadastro-produto.module').then(
        (m) => m.ModalCadastroProdutoPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
