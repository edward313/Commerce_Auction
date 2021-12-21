import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Web } from '../common/web';
import { categoryPro } from '../common/categoryPro';
import { User } from '../common/user';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  FirstName: string = ""
  LastName: string = ""
  role: string = '1'
  Address: string = ""
  Password: string = ""
  confirmPassword: string = ""
  Email: string = ""
  thongbao: any
  thongbaodaugia:any=''
  DateStart:string=""
  Datafinal:string=""
  price:string=""
  min_price:any
  bidding:any
  constructor(private commonservice: CommonService) { }
  WebData:Web[]=[];
  catePro: categoryPro[] = [];
  product:any=2
  User:User[]=[]
  thongbaoupload:any
  WebId:any=1
  ngOnInit(): void {
    this.getListWeb()
    
    this.renderCatePro(this.WebId) 
    this.Alluser()
    
  }

  delete(id:any){
    const payload={
      id:8
    } 
    this.commonservice.DeleteUser(payload).subscribe((res)=>{
      console.log("thanhcong")
    })
  }


  testid(id:any){
    const payload = {
      id:this.product,
      auctionTime: this.DateStart,
      auction_end_date: this.Datafinal,
      price_step:this.price,
      min_price:this.min_price
    }
    this.commonservice.addauction(payload).subscribe(res =>{
      console.log(res);
      if(res.toString()=="Đã đưa sản phẩm lên đấu giá")
      {
        this.thongbaodaugia=res;
      }
      else{
        this.thongbaodaugia="Lỗi " + res;
      }
    }

    )
  }
  Addproduct(id:any){
    const payload = {
      id:this.product,
      auctionTime: this.DateStart,
      auction_end_date: this.Datafinal,
      price_step:this.price,
      min_price:this.min_price
    }
    this.commonservice.addauction(payload).subscribe((res) =>{
      {
        if(res="Đã đưa sản phẩm lên đấu giá")
        {
          this.thongbaoupload=res
        }
      }
    }
    
    )
  }

  
  Adduser() {

    const payload = {
      firstname: this.FirstName,
      lastname: this.LastName,
      email: this.Email,
      password: this.Password,
      confirmPassword: this.confirmPassword,
      roleid: this.role,
      address: this.Address
    }





    console.log(payload);
    if (payload.firstname == null || payload.lastname == null || payload.email == null || payload.password == null || payload.confirmPassword == null) {
      this.thongbao = "Làm ơn nhập đủ thông tin";
    }
    else {
      this.commonservice.addUser(payload).subscribe(data => {
        if (data == 'thanhcong') {
          console.log('thanh cong');
          this.thongbao="Đã thêm người dùng thành công"
        }
        else {
          this.thongbao = "Lỗi: " + data;
        }
      })
    }
  }




  



  getListWeb() {
    this.commonservice.ListAllWeb().subscribe((res) => {
      this.WebData=res;
      console.log(this.WebData)
    });

  }


  renderCatePro(itemID: number) {
    
    this.commonservice.categoryPro(itemID).subscribe((res) => {
      
      this.catePro = res.category;
      // const tam = res.web;
     
      console.log(this.catePro);
      // window.location.reload()
    });
  }


  Alluser(){
    this.commonservice.Getalluser().subscribe((res)=>{
      this.User=res.result;
      // console.log(this.User)
    });
  }


  }
