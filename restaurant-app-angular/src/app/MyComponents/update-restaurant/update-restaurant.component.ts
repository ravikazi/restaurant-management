import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/MyServices/common.service';
import {ActivatedRoute} from '@angular/router';
 
@Component({
  selector: 'app-update-restaurant',
  templateUrl: './update-restaurant.component.html',
  styleUrls: ['./update-restaurant.component.css']
})
export class UpdateRestaurantComponent implements OnInit {
  alert:boolean=false;
  addFormData = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormControl('')
 });
  constructor(private commonService:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    this.commonService.getCurrentRestaurantData(this.router.snapshot.params.id).subscribe(
      (response)=>{
        this.addFormData = new FormGroup({
          name: new FormControl(response['name']),
          email: new FormControl(response['email']),
          mobile: new FormControl(response['mobile']),
          address: new FormControl(response['address'])
       });
      },
      (error)=>{
        console.log(error);
      }
      );
  }

  updateRestaurantData=()=>{
    this.commonService.updateRestaurantData(this.router.snapshot.params.id, this.addFormData.value).subscribe(
      (resonse)=>{
        console.log(resonse);
        this.alert=true;
        //this.addFormData.reset({});
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
