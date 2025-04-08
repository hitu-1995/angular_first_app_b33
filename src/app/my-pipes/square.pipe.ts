import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'square',
  standalone: false
})
export class SquarePipe implements PipeTransform {

  transform(a : number): number {
    return a*a;
  }

}
