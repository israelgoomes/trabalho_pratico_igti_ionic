import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  isLoading = false;
  constructor(public loading: LoadingController) {}

  async show() {
    this.isLoading = true;
    return await this.loading
      .create({
        message: 'Carregando ...',
        spinner: 'circles',
      })
      .then((a) => {
        a.present().then(() => {
          if (!this.isLoading) {
            a.dismiss().then(() => console.log('abort laoding'));
          }
        });
      });
  }

  async hide() {
    this.isLoading = false;
    return await this.loading
      .dismiss()
      .then(() => console.log('loading dismissed'));
  }
}
