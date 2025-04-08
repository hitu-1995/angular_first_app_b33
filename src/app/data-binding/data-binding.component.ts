import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  standalone: false,
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

   
    course : string = 'Angular';

    t1 : string = "text";
    p1 : string = "Enter Your DOB";
    a1 : string = "center";
    name : string = "Sachin Tendulkar";
    colorName : string = '';
  

    dept : string = '';
    getDepartment() : string {
         console.log("getDepartment :: Called"); 

         return this.dept;
    }

    setDepartment(dept : string) {

      console.log("setDepartment :: Called "+dept);
      this.dept=dept;
    }



}
