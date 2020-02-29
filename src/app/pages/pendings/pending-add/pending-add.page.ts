import { Component, OnInit } from '@angular/core';
import { List } from '../../../classes/Models';     // Models

@Component({
  selector: 'app-pending-add',
  templateUrl: './pending-add.page.html',
  styleUrls: ['./pending-add.page.scss'],
})
export class PendingAddPage implements OnInit {

  /** Atributes */
  nameList: string;
  nameItem: string = '';

  items: List[] = [];


  constructor() { }

  ngOnInit() {
  }

  /** Agrega item a la lista */
  add() {
    console .log( 'Add item' );

    /** Valida que los campos NO vengan vacios */
    if( this .nameItem .length <= 0 ) {
      console .log( 'No hay item' );
      return;
    }

    let item = new List( this .nameItem );    // Instancia Clase & Asigna nombre del Item a la lista

    this .items .push( item );                // Inserta item al Array
    this .nameItem = '';                      // Limpia el campo
    console .log( 'Lista', this .items );

  }

  /** Elimina item de la lista */
  delete( idx: number ) {
    console .log( 'Elimine posicion', idx );

    this .items .splice( idx, 1 );    /** Cambia el contanido de un array eliminando elemeto/s existentes (idx: indice donde inicia, 1: cantidad de campos a eliminar) */ 

    console .log( this .items );
  }

}
