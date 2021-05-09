import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'postfix'
})
export class PostfixPipe implements PipeTransform {

  transform(value: any, str:string = 'bye'): unknown {
    return value.toString() + str;
  }

}
