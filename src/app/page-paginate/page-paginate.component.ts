import { data_table } from './../shared/smart-table-settings';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-page-paginate',
  templateUrl: './page-paginate.component.html',
  styleUrls: ['./page-paginate.component.scss']
})
export class PagePaginateComponent implements OnInit {
  dataTable = data_table;
  pageIndex = 1;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.pageIndex = event;
    this.router.navigate(
      [], 
      {
        relativeTo: this.route,
        queryParams: { currentPage: event }, 
        queryParamsHandling: 'merge', // remove to replace all query params by provided
      });
  }
}
