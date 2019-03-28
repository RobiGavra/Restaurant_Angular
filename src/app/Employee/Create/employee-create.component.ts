import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Location } from '@angular/common';
import { Employee } from '../../Common/models';

@Component({
  selector: 'employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.scss'],
})

export class EmployeeCreateComponent {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    //let foodID = this.route.snapshot.paramMap.get('id');

    //this.foodService.addFood()
    //  .subscribe((result: any) => {
    //    this.food = result;
    //  });
  }

  back() {
    this._location.back();
  }
}
