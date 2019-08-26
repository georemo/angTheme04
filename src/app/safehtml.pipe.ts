import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'safehtml'
})
export class SafehtmlPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
