import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
import { User } from '../common/user';
import { Router } from '@angular/router';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  UserInfo: any;
  thongbao:any='';
  constructor(
    private _htpp: HttpClient,
    private UserService: UserService,
    private Router: Router
  ) {}

  ngOnInit(): void {
    this.user();
  }
  logout() {
    this.UserService.logOutUser().subscribe((res) => {
      console.log(res);
      if (res.toString() == 'thanh cong') {
        this.Router.navigateByUrl('/home');
      } else {
        console.log(res);
      }
    });
  }

  changePass(Curpass: any, Newpass: any) {
    const matkhau = {
      currentPassword: Curpass,
      newPassword: Newpass,
    };
    this.UserService.changemk(matkhau).subscribe((res) => {
      if(res=='success')
      {
        this.Router.navigateByUrl('/home');
      }
      else 
      {
        this.thongbao=res;
      }

    });
  }

  user() {
    this.UserService.getAll().subscribe((res) => {
      console.log('Hello cu' + res);
      if (res.toString() == 'Login') {
        this.Router.navigateByUrl('/login');
        return;
      
      } else if(res.toString()=='Khong co account')
      {
        this.Router.navigateByUrl('/login');
      }
      else {
        this.UserInfo = res;
      }
      
    });
  }
}
