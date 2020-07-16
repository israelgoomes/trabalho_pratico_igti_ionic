import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { ProdutoService } from '../services/produto-service/produto.service';
import { SpinnerService } from '../services/spinner-service/spinner.service';

@Component({
  selector: 'app-modal-cadastro-produto',
  templateUrl: './modal-cadastro-produto.page.html',
  styleUrls: ['./modal-cadastro-produto.page.scss'],
})
export class ModalCadastroProdutoPage implements OnInit {
  produtoForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private modalCtrl: ModalController,
    private produtoSrvc: ProdutoService,
    private toastCtrl: ToastController,
    private spinnerSrvc: SpinnerService
  ) {
    this.produtoForm = fb.group({
      id: [''],
      nmProduto: ['', Validators.required],
      preco: ['', Validators.required],
      description: ['', Validators.required],
      img: ['', Validators.required],
    });
  }
  ngOnInit() {}

  salvar() {
    this.produtoSrvc.getProduto().subscribe(
      (data) => {
        data.sort((a, b) => a.id - b.id);
        let id = data[data.length - 1].id + 1;
        this.produtoForm = this.fb.group({
          id: [id],
          nmProduto: [
            this.produtoForm.get('nmProduto').value,
            Validators.required,
          ],
          preco: [this.produtoForm.get('preco').value, Validators.required],
          description: [
            this.produtoForm.get('description').value,
            Validators.required,
          ],
          img: [this.produtoForm.get('img').value, Validators.required],
        });
        this.spinnerSrvc.hide();
        this.produtoSrvc.createProduto(this.produtoForm.value).subscribe(
          async () => {
            const toast = await this.toastCtrl.create({
              message: 'Produto criado com sucesso!',
              duration: 2000,
            });
            toast.present();
            this.spinnerSrvc.hide();
            this.modalCtrl.dismiss();
          },
          async (err) => {
            const toast = await this.toastCtrl.create({
              message: 'Erro ao cadastrar o produto: ' + err,
              duration: 2000,
            });
            toast.present();
            this.spinnerSrvc.hide();
          }
        );
      },
      (err) => {
        this.spinnerSrvc.hide();
      }
    );
  }

  cancelar() {
    this.modalCtrl.dismiss();
  }
}
