import { Pipe, PipeTransform } from '@angular/core';

type calculateFunc = (input: number) => number;

@Pipe({
  name: 'calculate'
})
export class CalculatePipe implements PipeTransform {

  transform(value: number, func: calculateFunc): number {
    return func(value);
  }

}
