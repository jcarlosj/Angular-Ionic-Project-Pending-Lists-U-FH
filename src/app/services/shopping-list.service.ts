import { Injectable } from '@angular/core';
import { List } from '../classes/List.model';       // Class Model

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  /** Atributes */
  lists: List[] = [];

  constructor() {
    console .log( 'ShoppingListService Inicializado' );
    this .loadData();       // Carga Datos Almacenados
  }

  /** Carga Datos Almacenados */
  loadData() {
    /** Valida que exista un item en el localStorage con el nombre requerido */
    if( localStorage .getItem( 'data' ) ) {
      this .lists = JSON .parse( localStorage .getItem( 'data' ) );
    }
  }

  /** Actualiza Datos Almacenados */
  updateData() {
    localStorage .setItem( 'data', JSON .stringify( this .lists ) );
  }

  /** Agrega una Lista */
  addList( list: List ) {
    this .lists .push( list );
    this .updateData();
  }

  /** Obtiene una Lista */
  getListItem( id: number ): List {
    const list = this .lists .filter( list => list .id === id );
    return list[ 0 ];
  }

  /** Elimina una Lista */
  deleteList( id: number ) {

    this .lists = this .lists .filter( list => {
      if( list .id !== id ) {
        return list;
      }
    });

    console .log( this .lists );
    this .updateData();

  }

}
