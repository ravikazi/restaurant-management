import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurantComponent } from './MyComponents/add-restaurant/add-restaurant.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ListRestaurantComponent } from './MyComponents/list-restaurant/list-restaurant.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { RegisterComponent } from './MyComponents/register/register.component';
import { UpdateRestaurantComponent } from './MyComponents/update-restaurant/update-restaurant.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent,
    pathMatch:"full"
  },
  {
    path:"add",
    component:AddRestaurantComponent,
    pathMatch:"full"
  },
  {
    path:"update/:id",
    component:UpdateRestaurantComponent,
    pathMatch:"full"
  },
  {
    path:"list",
    component:ListRestaurantComponent,
    pathMatch:"full"
  },
  {
    path:"login",
    component:LoginComponent,
    pathMatch:"full"
  },
  {
    path:"register",
    component:RegisterComponent,
    pathMatch:"full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
