import { Component } from '@angular/core';
import { ProductsService } from '../core/services/products/products.service';
import { Product } from '../interfaces/product';
import { FormsModule, FormGroup, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  myForm!: FormGroup;

  constructor(private productService: ProductsService, private formBuilder: FormBuilder) {
    this.myForm = this.formBuilder.group({
      handle: ['', Validators.required],
      title: ['', Validators.required],
      description: ['', Validators.required],
      sku: ['', Validators.required],
      grams: ['', Validators.required],
      stock: ['', Validators.required],
      price: ['', Validators.required],
      compare_price: ['', Validators.required],
      barcode: ['', Validators.required]
    })
  }

  createProduct() {
    if(this.myForm.valid){
      const data = {
        handle: this.myForm.get('handle')?.value,
        title: this.myForm.get('title')?.value,
        description: this.myForm.get('description')?.value,
        sku: this.myForm.get('sku')?.value,
        grams: this.myForm.get('grams')?.value,
        stock: this.myForm.get('stock')?.value,
        price: this.myForm.get('price')?.value,
        compare_price: this.myForm.get('compare_price')?.value,
        barcode: this.myForm.get('barcode')?.value
      }
      this.productService.createProduct(data).subscribe(res => console.log(res))
    }
  }

}
