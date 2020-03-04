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

  getListItem( id: number ) : List {
    return this .lists[ id ];
  }

}
