import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute, Router } from '@angular/router';
import { param } from 'jquery';
import { categoryPro } from '../common/categoryPro';
import { Web } from '../common/web';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  check: boolean = false;
  webid: any;
  ngay: String[] = [];
  gio: String[] = [];
  catePro: categoryPro[] = [];
  web: any;
  constructor(
    private commonService: CommonService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    // const itemId = +this.route.snapshot.params['id'];
    this.router.paramMap.subscribe((params) => {
      this.webid = params.get('id');
      this.renderCatePro(this.webid);
    });
  }
  renderCatePro(itemID: number) {
    this.commonService.categoryPro(itemID).subscribe((res) => {
      this.catePro = res.category;
      const tam = res.web;
      this.web = res.web;
      console.log(this.catePro);
      let chuoi;
      for (let i = 0; i < this.catePro.length; i++) {
        // if(this.catePro[i].auction_date==null)
        // {
        //   this.ngay[i]="Chưa";
        //   this.gio[i]="đấu giá";
        // }
        if (this.catePro[i].auction_date != null) {
          chuoi = this.catePro[i].auction_date.toString();
          this.ngay[i] = chuoi.slice(0, 10);
          this.gio[i] = chuoi.slice(11, 19);
          this.check = true;
        }
      }
      console.log(res);
    });
  }

  Testchuyentrang(id: number) {
    this.route.navigate(['/detail', id]);
  }
}
