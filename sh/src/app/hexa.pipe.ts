import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hexaaaaaaaaaaaaaaaaaaaaaaa'
})
export class HexaPipe implements PipeTransform {

  transform(x: any): unknown {
    return x.toString(16);
  }

}
