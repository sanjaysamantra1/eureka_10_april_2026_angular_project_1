import { Observable } from 'rxjs';
import { EmployeeService } from './../../services/employee-service';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-employee-list',
  imports: [CommonModule],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList {
  employeeService = inject(EmployeeService);
  employees$: Observable<Employee[]> | undefined;

  ngOnInit() {
    this.employees$ = this.employeeService.getAllEmployees();

    this.employeeService.getAllEmployees().subscribe((response) => {
      console.log(response);
    });
  }
}
