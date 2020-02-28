import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';   // Service
import { NavController } from '@ionic/angular';                               // Ionic Router

@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.page.html',
  styleUrls: ['./pendings.page.scss'],
})
export class PendingsPage implements OnInit {

  constructor( 
    private _shoppingListService : ShoppingListService,
    private _navController: NavController
  ) { }

  ngOnInit() {
  }

  /** Redirecciona a Formulario Nueva Lista Pendiente */
  goToPendingAddPage() {
    this ._navController .navigateForward( '/tabs/pendings/add' );
  }

}
