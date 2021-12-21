
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bannerposit } from './common/product';
import { Web } from './common/web';
import {Detailbider} from './common/detail'
import { Observable, EMPTY } from "rxjs";
import {  HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {

constructor(private _http:HttpClient) { }
httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    "Access-Control-Allow-Origin": "*",
    
  } ),
};


  ListAllProductHome(){
    return this._http.get("/api/product",this.httpOptions);
  }

  ListAllWeb(){
    return this._http.get<Web[]>("/api/web/list");
  }

  ListBider(){
    return this._http.get<any>("/api/auction")
  }

  productDetail(id:any){
    return this._http.get<any>("/api/product/"+id)
  }

  categoryPro(id:any){
    return this._http.get<any>("/api/category/"+id)
  }

  sendDataSubmit(bidsub:any){
    return this._http.post("/api/auction", bidsub,{ responseType: 'text' })
  }

  addUser(data:any){
    return this._http.post('api/auth/register',data,{ responseType: 'text' } )
  }

  sendCart(data:any){
    return this._http.post('api/payment/pay/paypal',data,{ responseType: 'text'})
  }

  sendCart2(data:any){
    return this._http.post('api/payment/pay/visa',data,{ responseType: 'text'})
  }

  cartUser(id:any){
    return this._http.get<any>('/api/cart/'+id)
  }

  addauction(data:any){
    return this._http.post('api/product/createAuction',data,{ responseType: 'text'})
  }

  searchItem(data:any){
    return this._http.post<any>('/api/product/searchByName',data)
  }

  kiemtralogin(){
    return this._http.get('/api/auth/login',{ responseType: 'text'})
  }
  // Cutstring(chuoi:string, ngay:string[],gio:string[]){
  //     for(let i=0;i<3;i++){
  //      ngay[i]=chuoi.slice(0,10)+i;
  //       gio[i]=chuoi.slice(11,19);
  //     }
  // }
  // create(newBannerposit: Bannerposit): Observable<Bannerposit> {
  //   return this._http.post<Bannerposit>("http://localhost:3000/bannerposit", Bannerposit)

  // }
  Getalluser(){
    return this._http.get<any>("api/user/list")
  }

  DeleteUser(data:any){
    return this._http.post("api/user/delete",data,{ responseType: 'text' } )
  }
}
