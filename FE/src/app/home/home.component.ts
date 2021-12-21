import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { CommonService } from '../common.service';
import { Bannerposit } from '../common/product';
import { Web } from '../common/web';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  searchString:any;
  Bannener: Bannerposit[] = [];
  WebData: Web[] = [];
  ngaybatdau: String[] = [];
  giobatdau: String[] = [];
  ngayend: String[] = [];
  gioend: String[] = [];
  check: any = 0;
  gioihan: any;
  kiemtra:boolean = false;
  constructor(private commonService: CommonService, private router: Router) { }

  ngOnInit(): void {


  }
  Timkiem(ten:any){
    console.log("check");
    const search={
      name: ten
    }
    this.commonService.searchItem(search).subscribe(res=>{
      this.Bannener = res.BannerPosit;
      this.WebData = res.WebInfo;
      console.log(this.Bannener);
      console.log(this.WebData);
      //this.WebData=res;
      let chuoi, chuoi2;
      for (let i = 0; i < Object.keys(this.Bannener).length; i++) {
        if (
          this.Bannener[i].auction_status == 1
          // this.Bannener[i].auction_date != null
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
          this.kiemtra=true;
        }
      }
      window.location.reload;
    })
  }
  Testchuyentrang(id: number) {
    this.router.navigate(['/detail', id]);
  }

}
