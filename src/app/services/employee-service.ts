import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  employee_api = 'http://localhost:3000/employees';
  httpClient = inject(HttpClient);

  getAllEmployees(): Observable<Employee[]> {
    // Service is returing the response as it is
    // return this.httpClient.get<Employee[]>(this.employee_api);

    // service is converting each response object to Employee object and returns
    return this.httpClient.get<Employee[]>(this.employee_api).pipe(
      map((responseArr: Employee[]) => {
        return responseArr.map((responseObj: Employee) => new Employee(responseObj));
      })
    );
  }
}
