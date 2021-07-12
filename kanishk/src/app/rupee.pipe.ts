import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rupee'
})
export class RupeePipe implements PipeTransform {

  transform(value: any) {
    return value * 72.95;
  }

}
