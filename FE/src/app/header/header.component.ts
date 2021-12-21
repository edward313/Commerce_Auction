import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';
import { Web } from '../common/web';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  WebData:Web[]=[];
  constructor(private commonService: CommonService,private router: Router, private UserService: UserService) {}

  ngOnInit(): void {
    this.getListWeb();
  }
  getListWeb() {
    this.commonService.ListAllWeb().subscribe((res) => {
      this.WebData=res;
    });
  }
  checkUser(){
    this.commonService.kiemtralogin().subscribe((res) => {
      console.log(res);
      console.log(typeof res);
      if(res=="login rồi nhé")
      {
        alert("Đã login!");
      }
      else{
        this.router.navigate(['/login']);
      }
    })
  }
  chuyenTrang(id:number){
    console.log(id);
    this.router.navigate(['/categogy',id]);
  }
}
