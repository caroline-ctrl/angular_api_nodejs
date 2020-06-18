import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
currentProduct = null;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // a l'ouverture de la page, il lance la methode et 
    // recupère dans l'url l'id du livre
    this.getProductById(this.route.snapshot.paramMap.get('id'));
  }

  getProductById(id)
  {
    this.productService.getProductById(id).subscribe(product => {
      this.currentProduct = product;
    }, error => {
      console.log(error);
    });

  }

}
