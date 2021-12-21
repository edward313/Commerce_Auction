import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register-cmp',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterCmpComponent implements OnInit {
  firstName: any;
  lastName: any;
  email: any;
  password: any;
  confirmPassword:any;
  address:any;
  thongbao:any="";
  constructor(private commonservice: CommonService, private Router: Router) { }

  ngOnInit(): void {

  }
  submitRegister(){
     const payload = {
      firstname: this.firstName,
      lastname: this.lastName,
      email: this.email,
      password: this.password,
      confirmPassword:this.confirmPassword,
      roleid : 2,
      address:this.address
    }
    console.log(payload);
    if(payload.firstname==null||payload.lastname==null||payload.email==null||payload.password==null||payload.confirmPassword==null)
    {
      this.thongbao="Làm ơn nhập đủ thông tin";
    }
    else{
    this.commonservice.addUser(payload).subscribe(data => {
      console.log(data);
      if (data == 'true') {
        console.log('thanh cong');
        this.Router.navigateByUrl('/home');
        return;
      }
      else{
        this.thongbao="Lỗi: "+data;
      }
    })
    }
  }

}
