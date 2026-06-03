import { Observable } from 'rxjs';
import { ProductService } from './../../services/product-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-http',
  imports: [
    CommonModule
  ],
  templateUrl: './product-list-http.html',
  styleUrl: './product-list-http.css',
})
export class ProductListHttp {
  productService = inject(ProductService);

  products$: Observable<any> | undefined;

  ngOnInit(){
    this.products$ = this.productService.getAllProducts();
  }
}
