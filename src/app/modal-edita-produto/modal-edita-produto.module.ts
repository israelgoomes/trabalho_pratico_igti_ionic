import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalEditaProdutoPageRoutingModule } from './modal-edita-produto-routing.module';

import { ModalEditaProdutoPage } from './modal-edita-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ModalEditaProdutoPageRoutingModule,
  ],
  declarations: [ModalEditaProdutoPage],
})
export class ModalEditaProdutoPageModule {}
