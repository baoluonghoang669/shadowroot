import { FormBuilder, FormGroup } from '@angular/forms';
import { FormControl, FormArray } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-a',
  templateUrl: './page-a.component.html',
  styleUrls: ['./page-a.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PageAComponent implements OnInit {
  @ViewChild('bold', {static: true}) bold: ElementRef;
  @ViewChild('scroll', {static: true}) scroll: ElementRef;
  form: FormGroup;
  checks: any = [
    {description: 'Bike', value: 'bike'},
    {description: "Car", value: 'car'},
    {description: "Boat", value: 'boat'}
  ];
  resultCars = '';
  resultRadio = '';
  resultChoices = [];
  resultText = '';
  resultTime = '';
  resultDate = '';

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.form = this.formBuilder.group({
      cars: [''],
      radio: [''],
      myChoices: this.formBuilder.array([]),
      text: [''],
      time: [''],
      date: ['']
    });
    window.onscroll = () => {
      this.onScroll();
    }
  }

  onScroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      this.scroll.nativeElement.innerHTML = 'Scroll over 500px to show text';
      this.scroll.nativeElement.className = 'color-red';
    } else {
      this.scroll.nativeElement.innerHTML = 'Scroll down 500px to hide text';
      this.scroll.nativeElement.className = 'color-blue';
    }
  }

  onClick() {
    this.bold.nativeElement.innerText = 'The text is clicked'; 
  }

  onDbClick() {
    this.bold.nativeElement.innerText = 'The text is double clicked'; 
  }

  over() {
    this.bold.nativeElement.innerText = 'The text is hover'; 
  }

  onRightClick(event: MouseEvent) {
    this.bold.nativeElement.innerText = 'The text is right click'; 
  }

  onDownload() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', 'https://file-examples-com.github.io/uploads/2017/10/file-example_PDF_1MB.pdf');
    link.setAttribute('download', `download`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  onSubmit() {
    this.resultCars = this.form.controls.cars.value;
    this.resultRadio = this.form.controls.radio.value;
    this.resultChoices = this.form.controls.myChoices.value;
    this.resultText = this.form.controls.text.value;
    this.resultTime = this.form.controls.time.value;
    this.resultDate = this.form.controls.date.value;
  }

  onCheckChange(event: any) {
    const checkArray: FormArray = this.form.get('myChoices') as FormArray;
    if (event.target.checked) {
      checkArray.push(new FormControl(event.target.value));
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == event.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }
}
