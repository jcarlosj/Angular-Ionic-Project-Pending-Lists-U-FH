import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';                              // Angular Router

@Component({
  selector: 'app-pending-detail',
  templateUrl: './pending-detail.page.html',
  styleUrls: ['./pending-detail.page.scss'],
})
export class PendingDetailPage implements OnInit {

  constructor( private _activatedRoute: ActivatedRoute ) {

    this ._activatedRoute .queryParams .subscribe( params => {
      console .log( 'params', params );
    });

  }

  ngOnInit() {
  }

}
