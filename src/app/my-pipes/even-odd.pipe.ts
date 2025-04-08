import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'evenOdd',
  standalone: false
})
export class EvenOddPipe implements PipeTransform {

  transform(value : number) : string {
    if(value%2==0)
    return "Number "+value+" Is Even Number";
    else
    return "Number "+value+" Is Odd Number";
  }


}
