import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/MyServices/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor(private commonService:CommonService, private router:Router) { }

  ngOnInit(): void {
  }

  checkUser=()=>{
    let users = this.commonService.veryfyUser(this.email);
    if(this.email==users.email && this.password==users.password)
    {
      this.router.navigate(['list']);
    }else{
      alert("Invalid user credentials! Try again...");
    }
  }

}
