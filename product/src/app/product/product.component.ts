import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(products => {
      console.log(products);
      this.products = products; // dans le tableau déclaré plus haut on y met les produits(parametre de la fonction)
      // tableau envoyé a la vue
    });
  }


}
