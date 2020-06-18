import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';
import { ProductService } from './../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  // variable pour récup le getbyid et l'injecter dans le form pour le update
  // je recupère le produit par l'id
  dataProduct = null;


  // declare un produit vide
  product: Product = {
    title: '',
    content: '',
    created_at: '',
    updated_at: ''
  };

  // pour le bouton
  isSubmit = false;
  // modification du formulaire si create ou update
  updat = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.updat === true){
      this.dataProduct = this.productService.getProductById(this.route.snapshot.paramMap.get('id')).subscribe()
    }
  }

  saveProduct()
  {
    const data = { // recupère les valeur du formulaire
      title: this.product.title,
      content: this.product.content,
      created_at: this.product.created_at,
      updated_at: this.product.updated_at
    };

    // fait appel a la methode createProduct présente dans productService et on passe la data
    this.productService.createProduct(data).subscribe(result => {
      this.updat = false;
      this.isSubmit = true;
    }, error => {
      console.log(error);
    });
  }


  newProduct()
  {
    this.updat = false;

    this.isSubmit = false;
    // un nouveau produit vide
    this.product = {
      title: '',
      content: '',
      created_at: '',
      updated_at: ''
    };
  }


  updateProduct(id)
  {
    const data = { // recupère les valeur du formulaire
      title: this.product.title,
      content: this.product.content,
      created_at: this.product.created_at,
      updated_at: this.product.updated_at
    };


    // j'utilise la methode du productService
    this.productService.updateProduct(data, id).subscribe(product => {
      this.updat = true;
      // this.dataProduct = product;
    }, err => {
      console.log(err);
    });
  }
}
