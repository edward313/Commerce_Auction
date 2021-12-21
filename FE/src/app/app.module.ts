import { NgModule, OnInit } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import * as $ from 'jquery';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PaymentComponent } from './payment/payment.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { ErrorComponent } from './error/error.component';
import { ListProductComponent } from './list-product/list-product.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RegisterCmpComponent } from './register/register.component';
import { UserService } from './_services/user.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PaymentComponent,
    CategoryComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    ErrorComponent,
    ListProductComponent,
    DetailProductComponent,
    AdminComponent,
    RegisterCmpComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  title="Hello";
  ngOnInit(){

 }
}
