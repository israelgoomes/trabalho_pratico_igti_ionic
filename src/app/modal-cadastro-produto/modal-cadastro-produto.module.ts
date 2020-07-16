import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalCadastroProdutoPageRoutingModule } from './modal-cadastro-produto-routing.module';

import { ModalCadastroProdutoPage } from './modal-cadastro-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalCadastroProdutoPageRoutingModule,
  ],
  declarations: [ModalCadastroProdutoPage],
})
export class ModalCadastroProdutoPageModule {}
