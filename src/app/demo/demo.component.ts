import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-demo',
  standalone: false,
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

    num : number = 100;
    name : string = "CJC Akurdi";
    price : number = 230.45;
    isPresent : boolean = true;
    data : any = 3000;


    days : string[] = ["MON","TUE","WED","THU","FRI","SAT","SUN"]

    emp1 : Employee = {
      eid: 101,
      ename: 'Virat',
      eadept: 'Testing',
      esalary: 90000,
      isPresent: true
    }
    emp2 : Employee = {
      eid: 102,
      ename: 'Rohit',
      eadept: 'Devlopement',
      esalary: 80000,
      isPresent: true
    }
    emp3 : Employee = {
      eid: 103,
      ename: 'Rahul',
      eadept: 'Testing',
      esalary: 70000,
      isPresent: true
    }
    emp4 : Employee = {
      eid: 104,
      ename: 'Hardik',
      eadept: 'HR',
      esalary: 40000,
      isPresent: true
    }
    emp5 : Employee = {
      eid: 105,
      ename: 'Axar',
      eadept: 'Admin',
      esalary: 30000,
      isPresent: true
    }
    employeeList : Employee[] = [this.emp1,this.emp2,this.emp3, this.emp4];

    person : {name : string; age : number} = {
      name: 'Mahesh',
      age: 30
    };
}
