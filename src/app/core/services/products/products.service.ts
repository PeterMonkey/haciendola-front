import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../../../interfaces/product';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>(`${environment.url}product/get-products`)
  }

  createProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(`${environment.url}product/new`, data)
  }
}
