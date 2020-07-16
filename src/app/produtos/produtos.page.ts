import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from '../models/produtoModel';
import { ProdutoService } from '../services/produto-service/produto.service';
import {
  ModalController,
  AlertController,
  ToastController,
} from '@ionic/angular';
import { SpinnerService } from '../services/spinner-service/spinner.service';
import { ModalCadastroProdutoPage } from '../modal-cadastro-produto/modal-cadastro-produto.page';
import { ModalEditaProdutoPage } from '../modal-edita-produto/modal-edita-produto.page';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  produtos: ProdutoModel[];
  constructor(
    private produtoSrvc: ProdutoService,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private spinnerSrvc: SpinnerService
  ) {}

  ngOnInit() {
    this.produtoSrvc.getProduto().subscribe(
      (data) => {
        this.produtos = data;
        this.spinnerSrvc.hide();
      },
      (err) => {
        this.spinnerSrvc.hide();
      }
    );
  }

  async cadastroProduto() {
    const modal = await this.modalCtrl.create({
      component: ModalCadastroProdutoPage,
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }

  async delete(produto: ProdutoModel) {
    const alert = await this.alertCtrl.create({
      header: 'Excluir?',
      message: `Você realmente deseja exluir o produto ${produto.nmProduto}`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Ok',
          handler: () => {
            this.produtoSrvc.deleteProduto(produto.id).subscribe(
              async () => {
                const toast = await this.toastCtrl.create({
                  message: 'Produto excluído com sucesso!',
                  duration: 2000,
                });
                toast.present();
                this.ngOnInit();
                this.spinnerSrvc.hide();
              },
              async (err) => {
                const toast = await this.toastCtrl.create({
                  message: 'Erro ao excluir o produto ' + err,
                  duration: 2000,
                });
                toast.present();
                this.spinnerSrvc.hide();
              }
            );
          },
        },
      ],
    });
    alert.present();
  }

  async edit(produto: ProdutoModel) {
    const modal = await this.modalCtrl.create({
      component: ModalEditaProdutoPage,
      componentProps: {
        produto: produto,
      },
    });
    modal.present();
    modal.onDidDismiss().then(() => {
      this.ngOnInit();
    });
  }
}
