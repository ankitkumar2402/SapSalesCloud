import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringToBool'
})
export class StringToBoolPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if(value === "F"){
      return true;
    } else{
      return false;
    }
  }

}
