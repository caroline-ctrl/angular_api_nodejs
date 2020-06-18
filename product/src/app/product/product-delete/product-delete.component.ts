import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.deleteProduct(this.route.snapshot.paramMap.get('id'));
  }

  deleteProduct(id)
  {
    this.productService.deleteProduct(id).subscribe(product => {
      console.log('suppression réussi');
    });
  }

}
