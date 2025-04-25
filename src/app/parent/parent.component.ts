import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
   value : string = 'How are You ?';  

   msgFromChild : string = '';
   recieveMessage(msg : string) {
       this.msgFromChild = msg;
       console.log("Message from child ",msg)
   }
}
