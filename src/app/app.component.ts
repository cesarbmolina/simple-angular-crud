import { Component } from '@angular/core';
import { Employee } from './models/employee';
import { EmptyOutletComponent } from '@angular/router/src/components/empty_outlet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  employeeArray: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA' },
    { id: 2, name: 'John', country: 'Australia' },
    { id: 3, name: 'Abdul', country: 'India' }
  ];

  selectedEmployee: Employee = new Employee();

  openForEdit(employee: Employee) {
    this.selectedEmployee = employee;
  }

  addOrEdit() {
    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }
    this.selectedEmployee = new Employee();

  }

  delete() {
    if (confirm('Are you sure delete?')) {
      this.employeeArray = this.employeeArray.filter(x => x !== this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }

  }

}
