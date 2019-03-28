import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';
import { Employee } from '../../Common/models';

@Component({
  selector: 'employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})

export class EmployeeDetailsComponent {
  employee: Employee;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private _location: Location
  ) { }

  ngOnInit() {
    let employeeID = this.route.snapshot.paramMap.get('id');

    this.employeeService.getDetails(employeeID)
      .subscribe((result: Employee) => {
        this.employee = result;
      });
  }

  back() {
    this._location.back();
  }

  formatDate(date: any) {
    return parseInt(date.substr(6));
  }

}
