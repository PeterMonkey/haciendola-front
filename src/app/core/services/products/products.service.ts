import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, ProductResponse } from '../../../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductResponse> {
    return this.http.get<ProductResponse>('http://localhost:3000/product/get-products')
  }

  createProduct(data: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/product/new', data)
  }
}
