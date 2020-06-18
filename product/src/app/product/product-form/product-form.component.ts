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

  // declare un produit vide
  product: Product = {
    title: '',
    content: '',
    created_at: '',
    updated_at: ''
  };

  // pour le bouton
  isSubmit = false;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
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
      this.isSubmit = true;
    }, error => {
      console.log(error);
    });
  }


  newProduct()
  {
    this.isSubmit = false;
    // un nouveau produit vide
    this.product = {
      title: '',
      content: '',
      created_at: '',
      updated_at: ''
    };
  }
}
