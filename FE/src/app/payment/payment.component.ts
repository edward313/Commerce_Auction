import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Cart } from '../common/cart';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  constructor(
    private _htpp: HttpClient,
    private UserService: UserService,
    private Router: Router,
    private commonService: CommonService
  ) {}
  UserInfo: any;
  gioihan:any;
  detailCart:Cart[]=[];
  ngOnInit(): void {
    this.getCartUser();
  }
  getCartUser() {
    var id;
    this.UserService.getAll().subscribe((res) => {
      if (res.toString() == 'Khong co account') {
        this.Router.navigateByUrl('/login');
        return;
      } else {
        this.UserInfo = res;
        id = this.UserInfo.respnse.id;
        console.log(this.UserInfo.respnse);
        this.commonService.cartUser(id).subscribe((res) => {
          console.log(res);
          this.detailCart=res;
          // console.log(this.detailCart[0].WebInfo)
           this.gioihan=Object.keys(res.Cart).length;
        });
      }
    });

  }
  Testchuyentrang(id:any) {
    this.Router.navigate(['/cart',id]);
  }
}
