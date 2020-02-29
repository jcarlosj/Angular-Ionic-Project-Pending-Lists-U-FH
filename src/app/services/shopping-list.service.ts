import { Injectable } from '@angular/core';
import { List } from '../classes/List.model';       // Class Model

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  /** Atributes */
  lists : List[] = [];

  constructor() {
    console .log( 'ShoppingListService Inicializado' );
  }

}
