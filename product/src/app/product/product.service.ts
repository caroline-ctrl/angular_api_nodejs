import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private REST_API_SERVER = "http://localhost:3000/api/product/";

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<Product[]>(this.REST_API_SERVER);
  }
}
