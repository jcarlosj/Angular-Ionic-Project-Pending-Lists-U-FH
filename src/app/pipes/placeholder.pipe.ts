import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'placeholder'
})
export class PlaceholderPipe implements PipeTransform {

  transform( value: any, ...args: any[] ): any {
    console .group( 'PlaceholderPipe' );
    console .log( 'value', value );
    console .log( 'args', args );
    console .groupEnd();

    return ( value ) ? value : args[ 0 ] ;
  }

}
