import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';   // Service
import { Router } from '@angular/router';                                     // Angular Router

@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.page.html',
  styleUrls: ['./pendings.page.scss'],
})
export class PendingsPage implements OnInit {

  constructor( 
    private _shoppingListService : ShoppingListService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  /** Redirecciona a Formulario Nueva Lista Pendiente */
  goToPendingAddPage() {
    this ._router .navigate( [ '/tabs/pendings/add' ] );
  }

  /** Redirecciona a Pagina de Detalles */
  goToPendingDetail( idx: number ) {
    console .log( 'pendings', idx );
    this ._router .navigate( [ '/tabs/pendings/detail', idx ] );
  }

}
