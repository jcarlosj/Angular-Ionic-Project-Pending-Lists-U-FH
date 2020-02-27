import { Injectable } from '@angular/core';
import { List } from '../classes/List.model';       // Class Model

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  /** Atributes */
  lists : List[] = [];

  constructor() {
    let marketList = new List( 'Compras supermercado' ),
        paymentList = new List( 'Pagos pendientes' ),
        wishList = new List( 'Lista de deseos' );

    console .log( 'ShoppingListService Inicializado' );

    this .lists .push( marketList );
    this .lists .push( paymentList );
    this .lists .push( wishList );
  }

}
