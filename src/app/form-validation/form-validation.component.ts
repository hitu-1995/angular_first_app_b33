import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  standalone: false,
  templateUrl: './form-validation.component.html',
  styleUrl: './form-validation.component.css'
})
export class FormValidationComponent implements OnInit {

     constructor(private formBuilder : FormBuilder){}

     registrationForm! : FormGroup;

      ngOnInit() {
        
           this.registrationForm = this.formBuilder.group({

                   name : ['',Validators.required],
                   email : ['',[Validators.required,Validators.email]],

                   mobile : ['',[Validators.required,
                                Validators.pattern('^[0-9]*$'),
                                Validators.minLength(10),
                                Validators.maxLength(10)]],
                   
                  password : ['',Validators.required,
                                Validators.pattern('^.{8}$'),
                                //Validators.minLength(8),
                                ],

           })

      }

      saveData() {
        alert('Register.........');
      }
       
      get formData()
      {
        return this.registrationForm.controls;
      } 

}
