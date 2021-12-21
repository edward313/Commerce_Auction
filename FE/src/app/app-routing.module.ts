import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterCmpComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path: 'login',component:LoginComponent},
  {path: 'cart/:id',component:CartComponent},
  {path: '',component:HomeComponent},
  {path :'home',component:HomeComponent},
  {path :'payment',component:PaymentComponent,},
  {path:'categogy/:id',component:CategoryComponent},
  {path:'account',component:AccountComponent},
  {path:'detail/:id',component:DetailProductComponent},
  {path:'admin',component:AdminComponent},
  {path: 'register',component:RegisterCmpComponent},
  {path:'**',component:ErrorComponent},
  // {path:'login',component:LoginComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy:PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
