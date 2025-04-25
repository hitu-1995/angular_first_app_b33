import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { HelloComponent } from './hello/hello.component';
import { CollegeModule } from './modules/college/college.module';
import { DepartmentComponent } from './modules/college/department/department.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';
import { SquarePipe } from './my-pipes/square.pipe';
import { EvenOddPipe} from './my-pipes/even-odd.pipe';
import { PrimePipe } from './my-pipes/prime.pipe';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { AppDirective } from './my-custom-dir/app.directive';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { RactiveFormComponent } from './ractive-form/ractive-form.component';
import { FormValidationComponent } from './form-validation/form-validation.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    HelloComponent,
    ContactusComponent,
    DataBindingComponent,
    PipeExampleComponent,
    SquarePipe,
    EvenOddPipe,
    PrimePipe,
    DirectivesDemoComponent,
    AppDirective,
    TemplateDrivenComponent,
    RactiveFormComponent,
    FormValidationComponent,
    ParentComponent,
    ChildComponent,
   
    //DepartmentComponent   // we will register Component , pipes, directives
  ],
  imports: [
    BrowserModule,        // we will register only Modules present in project
    AppRoutingModule,
    CollegeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],     // we will register all services 
  bootstrap: [AppComponent]  // we will register parent component 
})
export class AppModule { }
