import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/MyServices/common.service';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})  
export class AddRestaurantComponent implements OnInit {
  alert:boolean=false;
  addFormData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl('')
 });
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }
  createRestaurant=()=>{
    this.commonService.addRestaurant(this.addFormData.value).subscribe(
      (resonse)=>{
        console.log(resonse);
        this.alert=true;
        this.addFormData.reset({});
      },
      (error)=>{
        console.log("Something went wrong!!");
        console.log(error);
      }
    );
  }

  closeAlert=()=>{
    this.alert=false;
  }
}
