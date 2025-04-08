import { Component } from '@angular/core';
import { Employee } from '../model/employee';

@Component({
  selector: 'app-directives-demo',
  standalone: false,
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css'
})
export class DirectivesDemoComponent {


       constructor() {
            
        setTimeout(() => {
            this.flag = true;
        }, 3000);
             
       }

         

      flag : boolean = false;
       
      key : string = '';
      num : number = 10;

     name : string[] = ["VIRAT","ROHIT","RAHUL","GILL","PANT"];

    empList : Employee[] = [
      {eid:101,ename:'Virat',eadept:'Batting',esalary:90000,isPresent:true},
      {eid:102,ename:'Mahesh',eadept:'Bowling',esalary:70000,isPresent:true},
      {eid:103,ename:'Akash',eadept:'Fielding',esalary:50000,isPresent:false},
      {eid:104,ename:'Rahul',eadept:'Keeping',esalary:20000,isPresent:true},
    ]     
 
    headers : string[] = ['ID','NAME','DEPT','SALARY','PRSENT']

    getMyDesign1()
    {
      return {
        'color':'blue',
        'background-color' : 'orange',
        'padding' : '25px 0px 25px 0px'
        }
    }
    getMyDesign2()
    {
      return {
        'color':'green',
        'background-color' : 'grey',
        'padding' : '25px 0px 25px 0px'
        }
    }

      myClass : string = ''
     
    getDesignClass() 
    {
       if(this.flag)
       return 'abc'
      else
        return 'xyz'
    }


}
