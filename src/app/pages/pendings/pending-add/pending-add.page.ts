import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';         // Ionic Component
import { Item, List } from '../../../classes/Models';     // Models
import { ShoppingListService } from '../../../services/shopping-list.service';    // Service

@Component({
  selector: 'app-pending-add',
  templateUrl: './pending-add.page.html',
  styleUrls: ['./pending-add.page.scss'],
})
export class PendingAddPage implements OnInit {

  /** Atributes */
  nameList: string = '';
  nameItem: string = '';

  items: Item[] = [];

  constructor( 
    public _alertController: AlertController,
    public _shoppingListService: ShoppingListService,
    public _navController: NavController
  ) { }

  ngOnInit() {
  }

  /** Agrega item a la lista */
  add() {

    /** Valida que los campos NO vengan vacios */
    if( this .nameItem .length <= 0 ) {
      console .log( 'Campo nombre del item vacio' );
      return;
    }

    let item = new Item( this .nameItem );    // Instancia Clase & Asigna nombre del Item a la lista

    console .log( 'Add item', this .nameItem );

    this .items .push( item );                // Inserta item al Array
    this .nameItem = '';                      // Limpia el campo
    console .log( 'Items', this .items );

  }

  /** Elimina item de la lista */
  delete( idx: number ) {
    console .log( 'Elimine posicion', idx );

    this .items .splice( idx, 1 );    /** Cambia el contanido de un array eliminando elemeto/s existentes (idx: indice donde inicia, 1: cantidad de campos a eliminar) */ 

    console .log( this .items );
  }

  async saveList() {
    console .log( 'Save list' );

    /** Valida que los campos NO vengan vacios */
    if( this .nameList .length <= 0 ) {
      console .log( 'Campo nombre de la lista vacio' );

      const alert = await this ._alertController .create({
        header: 'Atención',
        subHeader: 'Dale nombre a tu lista',
        message: 'El nombre permite asociar cada uno de los items a una lista',
        buttons: ['OK']
      });

      await alert.present();
      return;
    }

    let list = new List( this .nameList );
    list .items = this .items;                          // Asigna la lista de items a la lista
    this ._shoppingListService .addList( list );        // Inserta datos al Service
    this ._navController .pop();                        // Navegar al componente inicial (actual)

  }

}
