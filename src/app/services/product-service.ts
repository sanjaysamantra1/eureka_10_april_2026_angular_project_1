import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
