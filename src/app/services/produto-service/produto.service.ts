import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProdutoModel } from '../../models/produtoModel';
import { SpinnerService } from '../spinner-service/spinner.service';

@Injectable({
  providedIn: 'root',
})
export class ProdutoService {
  url = 'http://localhost:3000/produtos';
  constructor(private http: HttpClient, private spinnerSrvc: SpinnerService) {}

  public getProduto(): Observable<ProdutoModel[]> {
    this.spinnerSrvc.show();
    return this.http.get<ProdutoModel[]>(this.url);
  }
  public createProduto(data): Observable<any> {
    this.spinnerSrvc.show();
    return this.http.post(this.url, data);
  }
  public deleteProduto(id): Observable<any> {
    this.spinnerSrvc.show();
    return this.http.delete(`${this.url}/${id}`);
  }
  public updatePRoduto(data): Observable<ProdutoModel> {
    this.spinnerSrvc.show();
    return this.http.put<ProdutoModel>(`${this.url}/${data.id}`, data);
  }
}
