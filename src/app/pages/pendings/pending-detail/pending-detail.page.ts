import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';         // Angular Router
import { ShoppingListService } from '../../../services/shopping-list.service';   // Service
import { List } from '../../../classes/List.model';       // Model
import { AlertController } from '@ionic/angular';         // Ionic Element

@Component({
  selector: 'app-pending-detail',
  templateUrl: './pending-detail.page.html',
  styleUrls: ['./pending-detail.page.scss'],
})
export class PendingDetailPage implements OnInit {

  /** Atributes */
  id: number;
  list: List;

  constructor( 
    private _activatedRoute: ActivatedRoute,
    private _shoppingListService: ShoppingListService,
    public _alertController: AlertController,
    private _router: Router
  ) {

    this ._activatedRoute .params .subscribe( params => {
      console .log( 'params', params );
      this .id = Number( params[ 'id' ] );
      this .list = this ._shoppingListService .getListItem( this .id );

    });

  }

  ngOnInit() {
  }

  /** Actualiza estado Completado de la lista */
  updateStatusCompleted( idItem: number ) {
    this .list .items[ idItem ] .isCompleted = ! this .list .items[ idItem ] .isCompleted;  // Cambia estado del Item
    this .list .isCompleted = this .areCompleted();       // Cambia estado de la Lista
    this ._shoppingListService .updateData();             // Actualiza los cambios

  }

  areCompleted() {
    let allCompleted = true;

    for( let item of this .list .items ) {
      if( ! item .isCompleted ) {
        allCompleted = false;
        break;
      }
    }

    return allCompleted;
  }

  /** Elimina una lista */
  async deleteList() {
    console .log( 'Delete List', this .list .id );

    const alert = await this ._alertController.create({
      header: `Eliminar ${ this .list .name }`,
      message: '¿Seguro deseas <strong>eliminar</strong> la lista?',
      buttons: [
        'Cancelar',
        {
          text: 'Si, Eliminar',
          handler: () => {
            this ._shoppingListService .deleteList( this .list .id );   /** Elimina */
            this ._router .navigate( [ '/tabs/pendings' ] );      /** Redirecciona */
          }
        }
      ]
    });

    await alert.present();

  }

}
