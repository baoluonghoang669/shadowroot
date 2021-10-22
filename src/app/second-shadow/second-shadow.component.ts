import { Component, OnInit, ViewEncapsulation, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second-shadow',
  templateUrl: './second-shadow.component.html',
  styleUrls: ['./second-shadow.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SecondShadowComponent implements OnInit {
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
