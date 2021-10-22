import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-third-shadow',
  templateUrl: './third-shadow.component.html',
  styleUrls: ['./third-shadow.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ThirdShadowComponent implements OnInit {
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
