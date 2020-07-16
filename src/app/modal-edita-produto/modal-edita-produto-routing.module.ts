import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalEditaProdutoPage } from './modal-edita-produto.page';

const routes: Routes = [
  {
    path: '',
    component: ModalEditaProdutoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalEditaProdutoPageRoutingModule {}
