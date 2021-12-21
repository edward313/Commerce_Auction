import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { User } from '../common/user';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  User: User[] = [];
  UserInfo: any;
  User1 = {
    username: 'phat',
    password: 'Phatluu',
    firstName: '',
    lastName: '',
  };
  constructor(
    private UserService: UserService,
    private _http: HttpClient,
    private fb: FormBuilder,
    private Router: Router
  ) {}
  val1: any;
  val2: any;
  token: any;
  thongbao:any;
  ngOnInit(): void {}

  getValue(val1: any, val2: any) {
    this.val1 = val1;
    this.val2 = val2;
  }
  Login(Email: any, password: any)
  {
    this.getValue(Email, password);
    const user = {
      email: this.val1,
      password: this.val2,
    };

    if (user.email != '' && user.password != '') {
          this._http
          .post('/api/auth/login', user, { responseType: 'text' })
          .subscribe((data) => {
            console.log(data);
            if(data=='admin')
            {
              this.Router.navigate(['/admin']);
            }
            else{
            if (data == 'thanhcong'||data=='user') {
              console.log('thanh cong');
              this.Router.navigateByUrl('/home');
              return;
            }
            else if(data.toString()=="WRONG PASS")
            {
              this.thongbao="Sai mật khẩu"
            }
            else{
              this.thongbao="Tài khoản không tồn tại"
            }
          }
      })

    }
  }
  GotoHome(): void {}
  addUser(User: any) {
    this._http.post('/api/user', User).subscribe(
      (data) => {
        console.log('POST Request is successful ', data);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }
  GetUser() {
    this.UserService.getAll().subscribe((res) => {
      this.User = res;
      console.log(res);
    });
  }
}
