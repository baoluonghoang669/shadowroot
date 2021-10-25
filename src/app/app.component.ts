import { FormBuilder, FormGroup, Validators, FormArray, FormControl } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent implements OnInit {
  @ViewChild('bold', {static: true}) bold: ElementRef;
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
