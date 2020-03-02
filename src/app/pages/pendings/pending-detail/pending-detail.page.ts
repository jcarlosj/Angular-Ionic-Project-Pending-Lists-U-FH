import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';         // Angular Router
import { List } from '../../../classes/List.model';       // Model

@Component({
  selector: 'app-pending-detail',
  templateUrl: './pending-detail.page.html',
  styleUrls: ['./pending-detail.page.scss'],
})
export class PendingDetailPage implements OnInit {

  /** Atributes */
  id: number;
  list: List;

  constructor( private _activatedRoute: ActivatedRoute ) {

    this ._activatedRoute .queryParams .subscribe( params => {
      console .log( 'params', params );

      this .id = Number( params[ 'idx' ] );
      this .list = JSON .parse( params[ 'list' ] );
    });

  }

  ngOnInit() {
  }

}
