import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ractive-form',
  standalone: false,
  templateUrl: './ractive-form.component.html',
  styleUrl: './ractive-form.component.css'
})
export class RactiveFormComponent {

     loginForm! : FormGroup;
     loginType : string = 'user';  // default user login

     constructor() {
         this.setLoginForm('user');
     }

     setLoginForm(type : string) {
     
           alert(type+" Login............")
            this.loginType = type;
           if(type==='user')
           {
            this.loginForm = new FormGroup({
                username : new FormControl(),
                password : new FormControl()
            });

           } else if(type==='admin') {
            this.loginForm = new FormGroup({
              adminId : new FormControl(),
              admiKey : new FormControl(),
              password : new FormControl()
            })
           }
      }

    //  loginForm = new FormGroup({
    //     username : new FormControl(),
    //     password : new FormControl(),

    //     address : new FormGroup({
    //       city : new FormControl(),
    //       area : new FormControl()
    //     })
    //   })

     submitData() {
  
        alert("Submit...........")
       
          console.log('Login Form Data...',this.loginForm.value);
     }
}
