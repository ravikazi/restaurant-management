import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private SERVER_URL = environment.SERVER_URL;
  constructor(private _http:HttpClient) { }

  //get All data from server
  getRestaurantList=()=>{
    return this._http.get(this.SERVER_URL+'/restaurants');
  }

  //Add data by post method to the server
  addRestaurant=(data)=>{
    console.log("Add service is runninig");
    return this._http.post(this.SERVER_URL+'/restaurants', data);
  }

  //Get Current data for update
  getCurrentRestaurantData=(id)=>{
    return this._http.get(`${this.SERVER_URL}/restaurants/${id}`);
  }

  //Update Current Data
  updateRestaurantData=(id, data)=>{
    return this._http.put(`${this.SERVER_URL}/restaurants/${id}`,data);
  }
  //Delete Data from server
  deleteCurrentRestaurant=(id)=>{
    return this._http.delete(`${this.SERVER_URL}/restaurants/${id}`);
  }

  //Add Users
  registerNewUser=(data)=>{
    return this._http.post(this.SERVER_URL+'/users', data);
  }

  //Verify By username/email
  veryfyUser=(email)=>{
    const users={'email':"ravikumarkazi@gmail.com","password":"admin"};
    return users;
  }
}
