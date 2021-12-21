import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CommonService } from '../common.service';
import { Detailbider } from '../common/detail';
import { Bannerposit } from '../common/product';
import { Router } from '@angular/router'
@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css'],
})
export class DetailProductComponent implements OnInit {
  bider: any;
  check: boolean = false;
  bannerPosit: any;
  user: any;
  numberSubmit: number = 0;
  item_id: any;
  thongbao:any;
  
  constructor(
    private commonService: CommonService,
    private route: ActivatedRoute,
    private _http: HttpClient,
    private cookieService: CookieService,
    private Router: Router
  ) {}
  ngOnInit(): void {
    const itemId = +this.route.snapshot.params['id'];
    this.item_id = itemId;
    this.proDetail(itemId);
  }
  proDetail(itemId: number) {
    this.commonService.productDetail(itemId).subscribe((res) => {
      this.user = res.UserInfo;
      this.bannerPosit = res.BannerPosit;
      this.bider = res.rank;
      // this.bannerPosit=tam.BannerPosit;
      //console.log(this.bider);
      //console.log(this.bannerPosit);
      //console.log(this.user);
      // console.log(this.bannerPosit['id']);
      console.log(this.bider);
       if(this.bider.toString() =="Không có ai đấu giá sản phẩm này")
      {
        this.check = false;
      }
      else if (this.bider != null) {
        this.check = true;
      } else this.check=false;
    });
  }
  onSubmit(numberSubmit: any) {
    //console.log("hello");
    //console.log(numberSubmit);
    var bidsub={
      price_bid: numberSubmit,
      bannerpositid: this.item_id,
      // price_step:
    }
    //console.log("Đây là bid sub: "+bidsub);
    this.commonService.sendDataSubmit(bidsub).subscribe(res=>{
      console.log('trả lại:'+res);
      console.log(this.cookieService.check('token'));
      if(this.cookieService.check('token')==false) {
        this.Router.navigateByUrl('/login');
      }
      else{
        this.thongbao= res;
        if(this.thongbao=="Đấu giá thành công")
        {
        window.location.reload();
        }
      }
    });

  }
}
