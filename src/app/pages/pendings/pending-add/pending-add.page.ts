import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-add',
  templateUrl: './pending-add.page.html',
  styleUrls: ['./pending-add.page.scss'],
})
export class PendingAddPage implements OnInit {

  /** Atributes */
  nameList: string;
  nameItem: string;

  constructor() { }

  ngOnInit() {
  }

}
