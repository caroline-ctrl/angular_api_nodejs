import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { ProductFormComponent } from './product/product-form/product-form.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';


const routes: Routes = [
  // {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'update/:id', component: ProductUpdateComponent},
  {path: 'product/:id', component: ProductDetailsComponent},
  {path: 'delete/:id', component: ProductDeleteComponent},
  {path: 'add', component: ProductFormComponent},
  {path: 'products', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
