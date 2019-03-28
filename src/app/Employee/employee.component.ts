import { Component } from '@angular/core';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../Common/models';

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})

export class EmployeeComponent {
  employees: Employee[];

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getEmployees()
      .subscribe((result: Employee[]) => {
        this.employees = result;
      });
  }

  formatDate(date: any) {
    return parseInt(date.substr(6));
  }
}
