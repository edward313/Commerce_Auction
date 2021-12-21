import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Cart } from '../common/cart';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  UserInfo: any;
  detailCart:Cart[]=[];
  renderCart:any;
  idPro:any;
  // selectedFile:File[]=null;
  selectedFile: File[]=[];

  constructor(
    private _htpp: HttpClient,
    private Router: Router,
    private UserService: UserService,
    private route: ActivatedRoute,
    private commonService: CommonService

  ) {}

  ngOnInit(): void {
     this.idPro = +this.route.snapshot.params['id'];
    console.log(this.idPro);
    var id;
    this.UserService.getAll().subscribe((res) => {
      this.UserInfo = res;
      id=this.UserInfo.respnse.id;
      console.log(this.UserInfo.respnse.id);
      this.commonService.cartUser(id).subscribe((res) => {
        this.detailCart=res;
        for(let i=0;i<Object.keys(res).length;i++) {
          if(this.detailCart[i].ProductId==this.idPro) {
            this.renderCart=this.detailCart[i];
            break;
          }
        }
        console.log(this.renderCart)
      });
    });
  }
  onFileChanged(event: any){

    console.log(event);
    this.selectedFile[0] = <File>event.target.files[0];
    console.log("end file change");
  }
  onUpload() {
    // console.log("on up load")
    const formData = new FormData();
    formData.append("imagefile", this.selectedFile[0], this.selectedFile[0].name);
    var paypal={
      id: this.idPro,
      file:formData,
      total:this.renderCart.totalPrice
    };
    console.log(paypal)
    this.commonService.sendCart(paypal).subscribe(res => {
      window.location.href=res;
    })
  }
  // onUpload2() {
  //   // console.log("on up load")
  //   const formData = new FormData();
  //   formData.append("imagefile", this.selectedFile[0], this.selectedFile[0].name);
  //   var paypal={
  //     id: this.idPro,
  //     file:formData,
  //     total:this.renderCart.totalPrice
  //   };
  //   console.log(paypal)
  //   this.commonService.sendCart2(paypal).subscribe(res => {
  //     console.log(res=='');
  //    window.location.href="http://localhost:3000/api/payment";
  //   })
  // }

}
