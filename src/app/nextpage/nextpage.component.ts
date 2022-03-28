import { data_table } from './../shared/smart-table-settings';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nextpage',
  templateUrl: './nextpage.component.html',
  styleUrls: ['./nextpage.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NextpageComponent implements OnInit {
  dataTable = data_table;
  pageStart = 0;
  currentPage = 1;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.currentPage = parseInt(this.route.snapshot.paramMap.get('page') || '1');
  }

  ngOnInit(): void {
    this.pageStart = (this.currentPage - 1)*5;
  }

  nextData() {
    this.router.navigateByUrl(`/nextpage?page=${this.currentPage + 1}`);
  }

  prevData() {
    this.router.navigateByUrl(`/nextpage?page=${this.currentPage - 1}`);
  }
}
