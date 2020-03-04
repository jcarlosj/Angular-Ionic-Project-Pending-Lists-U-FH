import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pendings'
})
export class PendingsPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
