import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paramssssssssssssssssssssss'
})
export class ParamsPipe implements PipeTransform {

  transform(inp:any, a, b , c ,d): unknown {
    return inp * (a+b+c+d);
  }

}
