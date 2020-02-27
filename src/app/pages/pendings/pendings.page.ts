import { Component, OnInit } from '@angular/core';
import { ShoppingListService } from '../../services/shopping-list.service';   // Service

@Component({
  selector: 'app-pendings',
  templateUrl: './pendings.page.html',
  styleUrls: ['./pendings.page.scss'],
})
export class PendingsPage implements OnInit {

  constructor( private _shoppingListService : ShoppingListService ) { }

  ngOnInit() {
  }

}
