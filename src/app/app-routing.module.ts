import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './Home/home.component';
import { ReservationComponent } from './Reservation/reservation.component';
import { ReservationEditComponent } from './Reservation/Edit/reservation-edit.component';
import { ReservationDetailsComponent } from './Reservation/Details/reservation-details.component';
import { ReservationDeleteComponent } from './Reservation/Delete/reservation-delete.component';
import { ReservationCreateComponent } from './Reservation/Create/reservation-create.component';

import { FoodComponent } from './Food/food.component';
import { FoodEditComponent } from './Food/Edit/food-edit.component';
import { FoodDeleteComponent } from './Food/Delete/food-delete.component';
import { FoodDetailsComponent } from './Food/Details/food-details.component';
import { FoodCreateComponent } from './Food/Create/food-create.component';

import { EmployeeComponent } from './Employee/employee.component';
import { EmployeeEditComponent } from './Employee/Edit/employee-edit.component';
import { EmployeeDetailsComponent } from './Employee/Details/employee-details.component';
import { EmployeeCreateComponent } from './Employee/Create/employee-create.component';
import { EmployeeDeleteComponent } from './Employee/Delete/employee-delete.component';

import { ImagesComponent } from './Images/images.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },

  { path: 'Reservation', component: ReservationComponent },
  { path: 'Reservation/Edit/:id', component: ReservationEditComponent, pathMatch: 'full' },
  { path: 'Reservation/Details/:id', component: ReservationDetailsComponent, pathMatch: 'full' },
  { path: 'Reservation/Delete/:id', component: ReservationDeleteComponent, pathMatch: 'full' },
  { path: 'Reservation/Create', component: ReservationCreateComponent, pathMatch: 'full' },

  { path: 'Food', component: FoodComponent },
  { path: 'Food/Edit/:id', component: FoodEditComponent, pathMatch: 'full' },
  { path: 'Food/Delete/:id', component: FoodDeleteComponent, pathMatch: 'full' },
  { path: 'Food/Details/:id', component: FoodDetailsComponent, pathMatch: 'full' },
  { path: 'Food/Create', component: FoodCreateComponent, pathMatch: 'full' },

  { path: 'Employee', component: EmployeeComponent },
  { path: 'Employee/Edit/:id', component: EmployeeEditComponent, pathMatch: 'full' },
  { path: 'Employee/Details/:id', component: EmployeeDetailsComponent, pathMatch: 'full' },
  { path: 'Employee/Create', component: EmployeeCreateComponent, pathMatch: 'full' },
  { path: 'Employee/Delete/:id', component: EmployeeDeleteComponent, pathMatch: 'full' },

  { path: 'Home/UploadImage', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
