import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoModel } from '../models/produtoModel';
import { ModalController, ToastController } from '@ionic/angular';
import { ProdutoService } from '../services/produto-service/produto.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Component({
  selector: 'app-modal-edita-produto',
  templateUrl: './modal-edita-produto.page.html',
  styleUrls: ['./modal-edita-produto.page.scss'],
})
export class ModalEditaProdutoPage implements OnInit {
  produtoForm: FormGroup;
  @Input() produto: ProdutoModel;
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private produtoSrvc: ProdutoService,
    private toastCtrl: ToastController,
    private spinnerSrvc: SpinnerService
  ) {}
  ngOnInit() {
    console.log(this.produto);
    this.produtoForm = this.fb.group({
      id: [this.produto.id, Validators.required],
      nmProduto: [this.produto.nmProduto, Validators.required],
      preco: [this.produto.preco, Validators.required],
      description: [this.produto.description, Validators.required],
      img: [this.produto.img, Validators.required],
    });
  }

  salvar() {
    this.produtoSrvc.updatePRoduto(this.produtoForm.value).subscribe(
      async () => {
        const toast = await this.toastCtrl.create({
          message: 'Produto atualizado com sucesso! ',
          duration: 2000,
        });
        toast.present();
        this.spinnerSrvc.hide();
        this.modalCtrl.dismiss();
      },
      async (err) => {
        const toast = await this.toastCtrl.create({
          message: 'Erro ao editar o produto ' + err,
          duration: 2000,
        });
        toast.present();
        this.spinnerSrvc.hide();
      }
    );
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
