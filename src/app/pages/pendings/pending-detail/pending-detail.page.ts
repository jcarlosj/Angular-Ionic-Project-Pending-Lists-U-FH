import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';         // Angular Router
import { ShoppingListService } from '../../../services/shopping-list.service';   // Service
import { List } from '../../../classes/List.model';

@Component({
  selector: 'app-pending-detail',
  templateUrl: './pending-detail.page.html',
  styleUrls: ['./pending-detail.page.scss'],
})
export class PendingDetailPage implements OnInit {

  /** Atributes */
  id: number;
  list: any;

  constructor( 
    private _activatedRoute: ActivatedRoute,
    private _shoppingListService: ShoppingListService
  ) {

    this ._activatedRoute .params .subscribe( params => {
      console .log( 'params', params );
      this .id = Number( params[ 'id' ] );
      this .list = this ._shoppingListService .getListItem( this .id );
      console .log( 'List', this .list );
    });

  }

  ngOnInit() {
  }

}
