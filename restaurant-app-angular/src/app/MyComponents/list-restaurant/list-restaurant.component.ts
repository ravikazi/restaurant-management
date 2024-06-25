import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/MyServices/common.service';

@Component({
  selector: 'app-list-restaurant',
  templateUrl: './list-restaurant.component.html',
  styleUrls: ['./list-restaurant.component.css']
})
export class ListRestaurantComponent implements OnInit {
  public collection:any;
  alert:boolean=false;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.getRestaurantList().subscribe(
      (data)=>{
        this.collection = data;
      },
      (error)=>{
        console.log("Something went wrong!");
      }
    );
  }
  deleteRestro=(id)=>{
    console.log("Clicked: "+id);
    this.commonService.deleteCurrentRestaurant(id).subscribe(
      (response)=>{
        console.log("Deleted: "+response);
        this.alert=true;
        const i = this.collection.findIndex(e=>e.id==id);
        if(i!==-1)
        {
          this.collection.splice(i, 1);
        }
      },
      (error)=>{
        console.log(error);
      });
  }

  closeAlert=()=>{
    this.alert=false;
  }
}
