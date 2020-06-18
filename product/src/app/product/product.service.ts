import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private REST_API_SERVER = "http://localhost:3000/api/product/";

  constructor(private http: HttpClient) { }

  // avoir la totalité des produits
  getProduct()
  {
    return this.http.get<Product[]>(this.REST_API_SERVER);
    // on retourne le tableau de produit a travers l'api
  }

  // un produit en fonction de l'id
  getProductById(id: string)
  {
    return this.http.get<Product>(this.REST_API_SERVER + id);
  }

  // créer un produit
  createProduct(data: Product)
  {
    return this.http.post<Product>(this.REST_API_SERVER, data);
  }

  // modifier un produit
  updateProduct(data: Product, id: string)
  {
    return this.http.put<Product>(this.REST_API_SERVER + id, data);
  }

  // supprimer un produit
  deleteProduct(id: string)
  {
    return this.http.delete<Product>(this.REST_API_SERVER + id);
  }
}
