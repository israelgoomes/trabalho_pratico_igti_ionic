import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalCadastroProdutoPage } from './modal-cadastro-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalCadastroProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalCadastroProdutoPageRoutingModule {}
