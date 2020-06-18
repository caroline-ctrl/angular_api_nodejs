import { Component, OnInit } from '@angular/core';
import { Product } from './../product.model';
import { ProductService } from './../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    title: '',
    content: '',
    created_at: '',
    updated_at: ''
  };

  is_submit = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  saveProduct()
  {
    const data = {
      title: this.product.title,
      content: this.product.content,
      created_at: this.product.created_at,
      updated_at: this.product.updated_at
    };

    this.productService.createProduct(data).subscribe(result => {
      this.is_submit = true;
    },error => {
      console.log(error);
    });
  }

  
  newProduct()
  {
    this.is_submit = false;
    this.product = {
      title: '',
      content: '',
      created_at: '',
      updated_at: ''
    }
  }

}
