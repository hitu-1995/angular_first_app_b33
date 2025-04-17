import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ractive-form',
  standalone: false,
  templateUrl: './ractive-form.component.html',
  styleUrl: './ractive-form.component.css'
})
export class RactiveFormComponent {

     loginForm = new FormGroup({
        username : new FormControl(),
        password : new FormControl(),

        address : new FormGroup({
          city : new FormControl(),
          area : new FormControl()
        })
      })

     submitData() {
  
        alert("Submit...........")
        console.log(this.loginForm.value.username);
        console.log(this.loginForm.value.password);
        console.log(this.loginForm.value.address?.city);
        console.log(this.loginForm.value.address?.area);
     }
}
