import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-third-shadow',
  templateUrl: './third-shadow.component.html',
  styleUrls: ['./third-shadow.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ThirdShadowComponent implements OnInit {
  @ViewChild('bold', {static: true}) bold: ElementRef;
  formThird: FormGroup;
  checks: any = [
    {description: 'Bike', value: 'bike'},
    {description: "Car", value: 'car'},
    {description: "Boat", value: 'boat'}
  ];
  resultCars = '';
  resultRadio = '';
  resultChoices = [];
  resultText = '';
  resultTime= '';
  resultDate = '';

  constructor(
    private formBuilder: FormBuilder
  ){}

  ngOnInit() {
    this.formThird = this.formBuilder.group({
      cars: [''],
      radio: [''],
      myChoices: this.formBuilder.array([]),
      text: [''],
      time: [''],
      date: ['']
    });
  }

  onClick() {
    this.bold.nativeElement.innerText = 'The text is clicked'; 
  }

  over() {
    this.bold.nativeElement.innerText = 'The text is hover'; 
  }

  onRightClick(event: MouseEvent) {
    this.bold.nativeElement.innerText = 'The text is right click'; 
  }

  onSubmit() {
    this.resultCars = this.formThird.controls.cars.value;
    this.resultRadio = this.formThird.controls.radio.value;
    this.resultChoices = this.formThird.controls.myChoices.value;
    this.resultText = this.formThird.controls.text.value;
    this.resultTime = this.formThird.controls.time.value;
    this.resultDate = this.formThird.controls.date.value;
  }

  onCheckChange(event: any) {
    const checkArray: FormArray = this.formThird.get('myChoices') as FormArray;
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
