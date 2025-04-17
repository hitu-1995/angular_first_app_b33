import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

    loginForm = {

      username : "",
      password : ""

    }


    submitData() {
      alert("Submit...")
      console.log(this.loginForm.username);
      console.log(this.loginForm.password);
    }

}
