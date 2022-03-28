import { data_table } from './../shared/smart-table-settings';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-loadmore',
  templateUrl: './page-loadmore.component.html',
  styleUrls: ['./page-loadmore.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageLoadmoreComponent implements OnInit {
  dataTable = data_table;
  n = 5;
  constructor() { }

  ngOnInit(): void {
  }

  onLoadMore() {
    this.n = this.n + 5;
  }
}
