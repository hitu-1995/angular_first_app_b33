import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prime',
  standalone: false
})
export class PrimePipe implements PipeTransform {

  transform(value: number): string {

      let count = 0;
      for(let i = 1; i<=value;i++)
      {
              if(value%i==0)
                count++;
      }
      if(count==2)
      return "Number "+value+" is Prime ";
      else
      return "Number "+value+" is Not Prime ";
  }

}
