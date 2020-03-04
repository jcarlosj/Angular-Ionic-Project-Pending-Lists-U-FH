import { Pipe, PipeTransform } from '@angular/core';
import { List } from '../classes/List.model';

@Pipe({
  name: 'pendings',
  pure: false       /** Pipe impuro: Aquel que se invoca siempre (false). Por defecto es puro lo que significa que solo se invoca cuando los datos que se pasan al metodo transform cambian. */
})
export class PendingsPipe implements PipeTransform {

  transform( lists: List[], completed: boolean = false ): List[] {
    const filteredList: List[] = [];

    for( const list of lists ) {
      if( list .isCompleted === completed ) {
        filteredList .push( list );
      }
    }

    return filteredList;
  }

}
