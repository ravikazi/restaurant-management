import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/MyServices/common.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alert:boolean=false;
  addFormData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl('')
 });
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

  addUser=()=>{
    this.commonService.registerNewUser(this.addFormData.value).subscribe(
      (response)=>{
        console.log("Registered"+response);
        this.alert=true;
        this.addFormData.reset();
      },
      (error)=>{
        console.log(error);
      }
    );
  }

  closeAlert=()=>{
    this.alert=false;
  }

}
