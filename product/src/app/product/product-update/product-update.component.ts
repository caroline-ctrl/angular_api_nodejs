import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: [ './product-update.component.css' ]
})
export class ProductUpdateComponent implements OnInit {
  // variable pour récup le getbyid et l'injecter dans le form pour le update
  // je recupère le produit par l'id
  dataProduct = null;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }

  getProductById(id) {
    this.productService.getProductById(id).subscribe(
      (product) => {
        this.dataProduct = product;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // product: Product = {
  //   title: this.dataProduct.title,
  //   content: this.dataProduct.content,
  //   created_at: this.dataProduct.created_at,
  //   updated_at: this.dataProduct.updated_at
  // };



  // updateProduct(id) {
  //   const data = {
  //     // recupère les valeur du formulaire
  //     title: this.product.title,
  //     content: this.product.content,
  //     created_at: this.product.created_at,
  //     updated_at: this.product.updated_at
  //   };

  //   // j'utilise la methode du productService
  //   this.productService.updateProduct(data, id).subscribe(
  //     (product) => {
  //       console.log('produit modifié')
  //       // this.dataProduct = product;
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //   );
  // }
}
