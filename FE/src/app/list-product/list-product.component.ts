import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';

import { CommonService } from '../common.service';
import { Bannerposit } from '../common/product';
import { Web } from '../common/web';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  // Bannener: Bannerposit[] = [];
  // WebData: Web[] = [];\
  Bannener: Bannerposit[] = [];
  WebData: Web[] = [];
  ngaybatdau: String[] = [];
  giobatdau: String[] = [];
  ngayend: String[] = [];
  gioend: String[] = [];
  check: any = 0;
  gioihan: any;
  // start = new Date(Date.now());
  // Bannerposit:Bannerposit[]=[
  //   new Bannerposit(1,'top banner','700',"800",700,"../assets/images/product2-3.jpg",1,this.start),
  //   new Bannerposit(1,"top banner","700","800",700,"../assets/images/product2-3.jpg",1,this.start),
  //   new Bannerposit(1,"top banner","700","800",700,"../assets/images/product2-3.jpg",1,this.start),
  //   new Bannerposit(1,"top banner","700","800",700,"../assets/images/product2-3.jpg",1,this.start),
  // ]
  constructor(private commonService: CommonService, private router: Router) {}

  // ProductFormCreate:FormGroup= new FormGroup({
  //   name:new FormControl(),
  //   price: new FormControl(),
  //   image:new FormControl()
  // });

  ngOnInit(): void {
    this.Animation();
    this.GetLastProduct();
  }
  Animation() {
    $(document).ready(function ($) {
      $('.fadeshop').hover(
        function () {
          $(this).find('.captionshop').fadeIn(150);
        },
        function () {
          $(this).find('.captionshop').fadeOut(150);
        }
      );
    });
  }

  GetLastProduct() {
    this.commonService.ListAllProductHome().subscribe((res) => {
      // this.Bannener = res.BannerPosit;
      // this.WebData = res.WebInfo;
      console.log(res)
      console.log(this.Bannener);
      console.log(this.WebData);
      //this.WebData=res;
      let chuoi, chuoi2;
      for (let i = 0; i < 12; i++) {
        if (
          this.Bannener[i].auction_status == 1 &&
          this.Bannener[i].auction_date != null
        ) {
          //console.log(this.Bannener[i].auction_date);
          chuoi = this.Bannener[i].auction_date.toString();
          this.ngaybatdau[i] = chuoi.slice(0, 10);
          this.giobatdau[i] = chuoi.slice(11, 19);
          chuoi2 = this.Bannener[i].auction_end_date.toString();
          this.ngayend[i] = chuoi2.slice(0, 10);
          this.gioend[i] = chuoi2.slice(11, 19);
          if (this.check < 3) {
            this.check += 1;
            console.log(this.check);
            if (this.check == 3) {
              console.log(i);
              this.gioihan = i + 1;
            }
          }
        }
      }
      // console.log(res)
    });
  }
  Testchuyentrang(id: number) {
    this.router.navigate(['/detail', id]);
  }
  // addproduct(){
  //   const newBannerposit:Bannerposit= new this.Bannener()
  // }
}
