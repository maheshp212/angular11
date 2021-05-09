import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'spread'
})
export class SpreadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    var res = value;
    for(let item of args){
      res += item;
    }
    return res;
  }

}
