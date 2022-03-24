import { data_table } from './../shared/smart-table-settings';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NextpageComponent implements OnInit {
  dataTable = data_table;
  pageStart = 0;
  constructor() { }

  ngOnInit(): void {
  }

  nextData() {
    this.pageStart += 5; // Get the next 5 records
  }

  prevData() {
    this.pageStart -= 5; // Get the previous 5 records
  }
}
