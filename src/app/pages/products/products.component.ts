import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../../core/services/products/products.service';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { ProductResponse } from '../../interfaces/product';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, ModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  public products!: ProductResponse
  constructor(private http: HttpClient, private productService: ProductsService) {}

  ngOnInit(): void {
      this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      this.products = res
      console.log(this.products.response)
    })
  }

}
