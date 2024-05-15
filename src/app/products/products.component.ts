import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductsService } from '../core/services/products/products.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private productService: ProductsService) {}

  ngOnInit(): void {
      this.getProducts()
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {
      console.log(res.response)
    })
  }

}
