import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-page-c',
  templateUrl: './page-c.component.html',
  styleUrls: ['./page-c.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageCComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
