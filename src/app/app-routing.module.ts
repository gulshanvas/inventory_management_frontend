import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './pages/product/product.component';


const routes: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "product",
    component: ProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}