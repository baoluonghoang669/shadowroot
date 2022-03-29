import { data_table } from './../shared/smart-table-settings';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-page-paginate',
  templateUrl: './page-paginate.component.html',
  styleUrls: ['./page-paginate.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PagePaginateComponent implements OnInit {
  dataTable = data_table;
  pageIndex = 1;
  pages: Array<any> = [];

  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.pageIndex = parseInt(this.route.snapshot.queryParams['page'] || 1);
    let pg = 1;
    for(let i = 1; i <= this.dataTable.length; i+= 5) {
      this.pages.push({pageNumber: pg, current: this.pageIndex === pg});
      pg++;
    }
  }
}
