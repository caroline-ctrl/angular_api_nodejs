import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent} from './product/product.component';


const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'update/:id', component: ProductComponent},
  {path: 'delete/:id', component: ProductComponent},
  {path: 'add', component: ProductComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'products', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
