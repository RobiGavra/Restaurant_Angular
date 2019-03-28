import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { APP_BASE_HREF } from '@angular/common'

import { AppComponent } from './app.component';
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

import { ImagesComponent } from './Images/images.component'
import { DeferLoadModule } from '@trademe/ng-defer-load';

import { ReservationService } from './Reservation/reservation.service';
import { FoodService } from './Food/food.service';
import { EmployeeService } from './Employee/employee.service';
import { ValidationService } from '../app/Common/validation.service';
import { ImagesService } from './Images/images.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReservationComponent,
    ReservationEditComponent,
    ReservationDetailsComponent,
    ReservationDeleteComponent,
    ReservationCreateComponent,
    FoodComponent,
    FoodEditComponent,
    FoodDeleteComponent,
    FoodDetailsComponent,
    FoodCreateComponent,
    EmployeeComponent,
    EmployeeEditComponent,
    EmployeeDetailsComponent,
    EmployeeCreateComponent,
    EmployeeDeleteComponent,
    ImagesComponent
  ],
  imports: [
    DeferLoadModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' })
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    ReservationService,
    FoodService,
    EmployeeService,
    ValidationService,
    ImagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
