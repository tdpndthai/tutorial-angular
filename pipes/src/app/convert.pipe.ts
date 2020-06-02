import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    //console.log(value);
    if (!value) {
      return '';
    }

    return value * 1.60934;
  }

}
