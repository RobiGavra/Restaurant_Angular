import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable, BehaviorSubject, from } from 'rxjs';
import { Employee } from '../Common/models';

@Injectable()
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>('Employee/GetEmployees', { responseType: 'json' });
  }

  getDetails(employeeID: any): Observable<Employee> {
    return this.http.get<Employee>(employeeID, { responseType: 'json' });
  }
}
