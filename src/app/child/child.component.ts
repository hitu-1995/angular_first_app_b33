import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
        
      @Input() name! : string;

      @Output() notify = new EventEmitter<string>();

      sendData() {
        this.notify.emit('I am Good..')
      }
}
