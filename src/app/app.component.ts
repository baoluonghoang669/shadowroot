import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  constructor(
  ){}

  ngOnInit() {
  }

  onClick() {
    alert('bạn đã click');
  }

  over() {
    alert('bạn đã hover');
  }

  onRightClick(event: MouseEvent) {
    alert('bạn đã right click');
  }
}
