import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApp]',
  standalone: false
})
export class AppDirective {

  constructor(private ele : ElementRef) { }

    @HostListener('mouseover')
    mouseOver()
    {
       this.ele.nativeElement.style.padding='25px';
       this.ele.nativeElement.style.backgroundColor='red';
       this.ele.nativeElement.style.fontStyle='Italic';   
       this.ele.nativeElement.style.color='blue';  
    }

    
    @HostListener('mouseout')
    mouseOut()
    {
       this.ele.nativeElement.style.padding='15px';
       this.ele.nativeElement.style.backgroundColor='black';
       this.ele.nativeElement.style.color='yellow';
       this.ele.nativeElement.style.fontStyle='';
           
    }
}
