import { data_table } from './../shared/smart-table-settings';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-scroll',
  templateUrl: './page-scroll.component.html',
  styleUrls: ['./page-scroll.component.css']
})
export class PageScrollComponent implements OnInit {
  dataTable = data_table;
  n = 25;
  element: any;

  constructor() { }

  @HostListener('window:scroll', ['$event'])
  onscroll(event: any) {
    this.element =  event.currentTarget;
    if (document.body.offsetHeight + this.element.pageYOffset >= document.body.scrollHeight) {
      setTimeout(() => {
        this.n = this.n + 5;
      }, 1000);
   }
  }

  ngOnInit(): void {
  }

  checkIsScroll() {
    return document.body.offsetHeight + this.element.pageYOffset >= document.body.scrollHeight;
  }
}
